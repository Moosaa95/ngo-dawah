import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crescent Impact Foundation (CIF) | Human & Capital Development Nigeria',
  description: 'Crescent Impact Foundation (CIF) is a Nigeria-based Non-Governmental Organization addressing barriers to human capital development, public health, quality education, and community security.',
  keywords: [
    'Crescent Impact Foundation',
    'CIF',
    'NGO Nigeria',
    'Human Capital Development',
    'Public Health Nigeria',
    'Quality Education Abuja',
    'Community Security',
    'Abuja Charity',
    'Zakat and Sadaqat Nigeria',
    'Volunteering Nigeria'
  ],
  authors: [{ name: 'Crescent Impact Foundation' }],
  robots: 'index, follow',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
