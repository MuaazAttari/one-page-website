import { NextRequest, NextResponse } from 'next/server';
import { systemPrompt } from '@/lib/ai/systemPrompt';

// Rate limiting store (IP-based)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute per IP

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = getClientIP(request);
    const now = Date.now();
    const clientData = rateLimitMap.get(ip) || { count: 0, timestamp: now };

    // Reset if window expired
    if (now - clientData.timestamp > RATE_LIMIT_WINDOW) {
      clientData.count = 0;
      clientData.timestamp = now;
    }

    // Check rate limit
    if (clientData.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before sending another message.' },
        { status: 429 }
      );
    }

    // Increment counter
    clientData.count += 1;
    rateLimitMap.set(ip, clientData);

    // Parse request body
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error('❌ OPENROUTER_API_KEY not configured');
      return NextResponse.json(
        { error: 'AI service is not configured. Please contact the site owner.' },
        { status: 500 }
      );
    }

    // Build messages array
    const messages = [
      {
        role: 'system',
        content: systemPrompt,
      },
      ...conversationHistory.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
      {
        role: 'user',
        content: message,
      },
    ];

    // Call OpenRouter API
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://muhammadmuaazansari.vercel.app',
        'X-Title': 'Muhammad Muaaz Ansari Portfolio',
      },
      body: JSON.stringify({
        model: 'nvidia/nemotron-3-super-120b-a12b:free',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenRouter API Error:', errorData);
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: 'Invalid API key configuration' },
          { status: 500 }
        );
      }
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: 'AI service quota exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      throw new Error(errorData.error?.message || 'Failed to get AI response');
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Return successful response
    return NextResponse.json({
      success: true,
      response: assistantMessage.trim(),
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Invalid API key configuration' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
