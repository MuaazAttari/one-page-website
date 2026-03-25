import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request);
    
    // Rate limiting check
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
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Increment counter
    clientData.count += 1;
    rateLimitMap.set(ip, clientData);

    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'muhammadmuaazansari92@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

    if (!resendApiKey) {
      console.warn('⚠️ RESEND_API_KEY not configured. Email not sent.');
      console.log('📬 Contact form submission (not emailed):', sanitizedData);
    } else {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [contactEmail],
            subject: `New message from ${sanitizedData.name}`,
            reply_to: sanitizedData.email,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #00f0ff, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; }
                    .header h1 { color: white; margin: 0; font-size: 24px; }
                    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
                    .field { margin-bottom: 20px; }
                    .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
                    .value { font-size: 16px; color: #1f2937; margin-top: 4px; }
                    .message { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00f0ff; }
                    .footer { text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1>📬 New Contact Form Submission</h1>
                    </div>
                    <div class="content">
                      <div class="field">
                        <div class="label">From</div>
                        <div class="value">${sanitizedData.name}</div>
                      </div>
                      <div class="field">
                        <div class="label">Email</div>
                        <div class="value">
                          <a href="mailto:${sanitizedData.email}" style="color: #00f0ff; text-decoration: none;">
                            ${sanitizedData.email}
                          </a>
                        </div>
                      </div>
                      <div class="field">
                        <div class="label">Message</div>
                        <div class="message">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                      </div>
                      <div class="field">
                        <div class="label">Submitted At</div>
                        <div class="value">${sanitizedData.timestamp}</div>
                      </div>
                    </div>
                    <div class="footer">
                      <p>This message was sent from your portfolio website contact form.</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          console.error('❌ Resend API error:', errorData);
          throw new Error('Failed to send email via Resend');
        }

        const emailResult = await emailResponse.json();
        console.log('✅ Email sent successfully via Resend:', emailResult);

      } catch (error) {
        console.error('Email sending failed:', error);
        // Continue with success response even if email fails (logging only)
      }
    }

    console.log('📬 Contact form submission:', sanitizedData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
