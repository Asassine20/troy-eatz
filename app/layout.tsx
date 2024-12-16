import Footer from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // Import Script component

import './globals.css';
import Provider from '@/utils/provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  keywords: [
    'Troy Eatz',
    'Convenience Store Troy',
    'Snacks in Troy',
    'Drinks in Troy',
    'Food Troy Michigan',
    'Coffee Troy MI',
    'Lottery Troy',
    'Troy Michigan Store',
    'Troy MI Snacks',
    'Troy MI Drinks',
    'Energy Drinks in Troy MI',
  ],
  openGraph: {
    title: 'Troy Eatz - Your Local Convenience Store in Troy, MI',
    description:
      'Troy Eatz is your go-to convenience store in Troy, Michigan, offering snacks, drinks, fresh food, coffee, lottery tickets, and all your daily essentials. Stop by and experience friendly service!',
    images: ['https://utfs.io/f/7LRLp6c9mzQV3JxiYnksejPmg8NLUXJTqSay4tD6cEIMBY2Z'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="Ow-lKzPp8M4a16wfCnI_0X0gEEl6PI5htNpy75_hA4k" />
        
        {/* Add Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PY8KBB5RB7`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PY8KBB5RB7', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Favicon and other meta tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7ed957" />
      </head>
      <body className={inter.className}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <Analytics />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
