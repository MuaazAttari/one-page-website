import { NextRequest, NextResponse } from 'next/server';

// Test endpoint to verify Resend configuration
export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  const config = {
    hasApiKey: !!resendApiKey,
    apiKeyStart: resendApiKey ? resendApiKey.substring(0, 6) + '...' : 'none',
    contactEmail: contactEmail || 'not set',
    fromEmail: process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
  };

  return NextResponse.json({
    status: 'ok',
    config,
    message: 'If hasApiKey is true, your configuration is correct.',
  });
}

// Send a test email
export async function POST() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || 'muhammadmuaazansari92@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';

  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured in .env.local' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        subject: '🧪 Test Email from Portfolio',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #00f0ff, #8b5cf6); padding: 30px; border-radius: 12px 12px 0 0; }
                .header h1 { color: white; margin: 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
                .success { color: #10b981; font-size: 18px; font-weight: bold; }
                .info { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
                .footer { text-align: center; padding: 20px; color: #9ca3af; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🧪 Test Email</h1>
                </div>
                <div class="content">
                  <p class="success">✅ Email delivery successful!</p>
                  <div class="info">
                    <p><strong>This is a test email from your portfolio contact form.</strong></p>
                    <p>If you received this, your Resend configuration is working correctly.</p>
                    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                    <p style="font-size: 14px; color: #6b7280;">
                      Sent to: ${contactEmail}<br>
                      From: ${fromEmail}<br>
                      Time: ${new Date().toISOString()}
                    </p>
                  </div>
                </div>
                <div class="footer">
                  <p>Portfolio Contact Form Test</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Resend API error:', errorData);
      return NextResponse.json(
        { 
          error: 'Failed to send test email',
          details: errorData,
        },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('✅ Test email sent successfully:', result);

    return NextResponse.json({
      success: true,
      message: 'Test email sent! Check your inbox.',
      emailId: result.id,
      sentTo: contactEmail,
    });

  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
