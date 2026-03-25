import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { LoadingProvider } from '@/lib/loading';

export const metadata = {
  title: 'Muhammad Muaaz Ansari | Web Developer & AI Solutions',
  description: 'I specialize in building modern web applications and AI-powered solutions using Next.js and Python.',
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
            {children}
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}