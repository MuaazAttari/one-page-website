import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #16213e 100%)',
          flexDirection: 'column',
        }}
      >
        {/* Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #00f0ff 0%, #06b6d4 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 30,
          }}
        >
          Muhammad Muaaz Ansari
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 40,
            color: '#9ca3af',
            marginBottom: 60,
          }}
        >
          Web Developer & AI Solutions Builder
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', gap: 30 }}>
          {['Next.js', 'Python', 'AI/ML', 'Tailwind'].map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px 40px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(0, 240, 255, 0.3)',
                borderRadius: 16,
                color: '#00f0ff',
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 24,
            color: '#6b7280',
          }}
        >
          github.com/MuaazAttari
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
