import { ReactNode } from 'react';
import { Metadata } from 'next';
import { ReduxProvider } from '@/redux/provider';

import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Mikko CRM',
  description: 'Система керування для внутрішнього користування',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="ua" className={`${inter.className} ${manrope.className} h-full`}>
        <body className="h-full">{children}</body>
      </html>
    </ReduxProvider>
  );
}
