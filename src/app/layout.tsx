import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';

import { Nav, NavItem } from '@/components/Nav';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Ted Cater',
  description: 'Portfolio site for Ted Cater',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <Nav>
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/favourites">Favourites</NavItem>
        </Nav>
        <div className="px-20 py-8">{children}</div>
      </body>
    </html>
  );
}
