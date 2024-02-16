'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type NavItemProps = {
  children: ReactNode;
  href: string;
};

export const NavItem = ({ children, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          'rounded-md px-8 py-2 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100',
          isActive && 'bg-gray-100 text-gray-800',
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export type NavProps = {
  children: ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  return (
    <nav className="w-screen border-b border-gray-200 px-12 py-4">
      <ul className="flex justify-between">{children}</ul>
    </nav>
  );
};
