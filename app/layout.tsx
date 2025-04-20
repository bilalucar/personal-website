import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const title = 'Bilal Uçar - Front-end Developer | JavaScript | Angular';
const description =
  'Angular, React, JavaScript, SCSS, Ionic, Firebase gibi teknolojileri kullanıyorum. Front-end alanında kendimi geliştirmeye çalışıyorum.';
const image = 'https://bilalucar.com/images/logo.jpg';

export const metadata: Metadata = {
  title,
  description,
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-192x192.png'
  },
  robots: 'follow, index',
  metadataBase: new URL('https://bilalucar.com'),
  openGraph: {
    siteName: title,
    description,
    title,
    images: image
  },
  twitter: {
    card: 'summary_large_image',
    site: title,
    description,
    title,
    images: image
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <body>{children}</body>
      <GoogleAnalytics gaId='G-6JSN30ZXWX' />
      <Analytics />
    </html>
  );
}
