import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import Footer from '@/components/footer';
import { FloatingNav } from '@/components/ui/floating-navbar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'michxymi.com',
  description:
    'My personal website for sharing projects, insights, and career updates while experimenting with the latest web technologies.',
};

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Blog', link: '#blog' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
            <div className="w-full max-w-7xl">
              <FloatingNav navItems={navItems} />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
