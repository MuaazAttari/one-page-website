import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Main content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            padding: '60px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00f0ff 0%, #06b6d4 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Muhammad Muaaz Ansari
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: '#9ca3af',
              marginBottom: 40,
              textAlign: 'center',
              letterSpacing: '0.02em',
            }}
          >
            Web Developer & AI Solutions Builder
          </div>

          {/* Tech stack badges */}
          <div
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 50,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { text: 'Next.js', color: '#00f0ff' },
              { text: 'Python', color: '#fbbf24' },
              { text: 'AI/ML', color: '#8b5cf6' },
              { text: 'Tailwind', color: '#06b6d4' },
            ].map((tech) => (
              <div
                key={tech.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${tech.color}40`,
                  borderRadius: 12,
                  color: tech.color,
                  fontSize: 24,
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                }}
              >
                {tech.text}
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: '#6b7280',
              fontWeight: 400,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* GitHub icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#9ca3af">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              MuaazAttari
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Globe icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              Portfolio
            </div>
          </div>
        </div>

        {/* Decorative code pattern */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 40,
            fontSize: 14,
            color: 'rgba(139, 92, 246, 0.3)',
            fontFamily: 'monospace',
            textAlign: 'right',
            lineHeight: 1.5,
          }}
        >
          {'<Developer />'}<br/>
          {'<AI_Enthusiast />'}<br/>
          {'<ProblemSolver />'}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
