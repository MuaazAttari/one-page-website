/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'primary-glow': 'rgba(0, 240, 255, 0.5)',
        'accent-glow': 'rgba(139, 92, 246, 0.5)',
        'card-bg': 'var(--card-bg)',
        'card-bg-hover': 'var(--card-bg-hover, rgba(255, 255, 255, 0.08))',
        'card-border': 'var(--card-border)',
        'card-border-hover': 'var(--card-border-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./styles/**/*.{css}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: 'var(--color-primary)',
//           hover: 'var(--color-primary-hover)',
//         },
//         secondary: 'var(--color-secondary)',
//         accent: 'var(--color-accent)',
//         text: {
//           primary: 'var(--color-text-primary)',
//           secondary: 'var(--color-text-secondary)',
//           tertiary: 'var(--color-text-tertiary)',
//         },
//         background: {
//           DEFAULT: 'var(--color-background)',
//           alt: 'var(--color-background-alt)',
//         },
//         border: 'var(--color-border)',
//         card: {
//           bg: 'var(--color-card-bg)',
//         },
//       },
//       fontFamily: {
//         sans: ['var(--font-family-primary)', 'sans-serif'],
//       },
//       fontSize: {
//         'xs': ['var(--font-size-xs)', 'var(--line-height-tight)'],
//         'sm': ['var(--font-size-sm)', 'var(--line-height-tight)'],
//         'base': ['var(--font-size-base)', 'var(--line-height-normal)'],
//         'lg': ['var(--font-size-lg)', 'var(--line-height-normal)'],
//         'xl': ['var(--font-size-xl)', 'var(--line-height-relaxed)'],
//         '2xl': ['var(--font-size-2xl)', 'var(--line-height-relaxed)'],
//         '3xl': ['var(--font-size-3xl)', 'var(--line-height-tight)'],
//         '4xl': ['var(--font-size-4xl)', 'var(--line-height-tight)'],
//         '5xl': ['var(--font-size-5xl)', 'var(--line-height-tight)'],
//         '6xl': ['var(--font-size-6xl)', 'var(--line-height-tight)'],
//       },
//       fontWeight: {
//         normal: 'var(--font-weight-normal)',
//         medium: 'var(--font-weight-medium)',
//         semibold: 'var(--font-weight-semibold)',
//         bold: 'var(--font-weight-bold)',
//       },
//       borderRadius: {
//         sm: 'var(--border-radius-sm)',
//         md: 'var(--border-radius-md)',
//         lg: 'var(--border-radius-lg)',
//         xl: 'var(--border-radius-xl)',
//         '2xl': 'var(--border-radius-2xl)',
//         full: 'var(--border-radius-full)',
//       },
//       spacing: {
//         1: 'var(--spacing-1)',
//         2: 'var(--spacing-2)',
//         3: 'var(--spacing-3)',
//         4: 'var(--spacing-4)',
//         5: 'var(--spacing-5)',
//         6: 'var(--spacing-6)',
//         8: 'var(--spacing-8)',
//         10: 'var(--spacing-10)',
//         12: 'var(--spacing-12)',
//         16: 'var(--spacing-16)',
//         20: 'var(--spacing-20)',
//         24: 'var(--spacing-24)',
//         32: 'var(--spacing-32)',
//       },
//       boxShadow: {
//         sm: 'var(--shadow-sm)',
//         DEFAULT: 'var(--shadow)',
//         md: 'var(--shadow-md)',
//         lg: 'var(--shadow-lg)',
//         xl: 'var(--shadow-xl)',
//       },
//       transitionDuration: {
//         fast: 'var(--duration-short)',
//         normal: 'var(--duration-standard)',
//         slow: 'var(--duration-long)',
//       },
//       animation: {
//         'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
//         'stagger-container': 'staggerContainer 0.5s ease-out forwards',
//         'slide-in-left': 'slideInFromLeft 0.5s ease-out forwards',
//         'slide-in-right': 'slideInFromRight 0.5s ease-out forwards',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//         staggerContainer: {
//           '0%': { opacity: 0 },
//           '100%': { opacity: 1 },
//         },
//         slideInFromLeft: {
//           '0%': { opacity: 0, transform: 'translateX(-20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//         slideInFromRight: {
//           '0%': { opacity: 0, transform: 'translateX(20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//       }
//     },
//   },
//   plugins: [],
// }