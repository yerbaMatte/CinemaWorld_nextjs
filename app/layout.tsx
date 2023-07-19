import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CinemaWorld',
  description:
    'Experience the enchantment of CinemaWorld, where extraordinary movies come to life. Discover a curated selection of captivating films across genres, immersing yourself in the magic of exceptional storytelling and unforgettable cinematic moments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
