import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ted Cater',
  description: 'Portfolio site for Ted Cater',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-screen border-b border-gray-200 px-20 py-2">
          <ul className="flex justify-between">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
        <div className="px-20 py-8">{children}</div>
      </body>
    </html>
  );
}
