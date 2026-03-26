import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { LoadingProvider } from '@/lib/loading';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollButtons from '@/components/ScrollButtons';
import AIChatWidget from '@/components/AIChatWidget';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Muhammad Muaaz Ansari | Web Developer & AI Solutions',
  description: 'I specialize in building modern web applications and AI-powered solutions using Next.js and Python.',
  metadataBase: new URL('https://one-page-website-psi.vercel.app'),
  keywords: ['Web Developer', 'AI Engineer', 'Next.js', 'Python', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Muhammad Muaaz Ansari' }],
  creator: 'Muhammad Muaaz Ansari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://one-page-website-psi.vercel.app',
    title: 'Muhammad Muaaz Ansari | Web Developer & AI Solutions',
    description: 'I specialize in building modern web applications and AI-powered solutions using Next.js and Python.',
    siteName: 'Muhammad Muaaz Ansari Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Muaaz Ansari - Web Developer & AI Solutions Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Muaaz Ansari | Web Developer & AI Solutions',
    description: 'I specialize in building modern web applications and AI-powered solutions using Next.js and Python.',
    creator: '@MuaazAttari',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased">
        <LoadingProvider>
          <ThemeProvider>
            <ScrollProgress />
            <ScrollButtons />
            <AIChatWidget />
            {children}
            <Analytics />
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}