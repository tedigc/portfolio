import Link from 'next/link';
import { ReactNode } from 'react';

export type NavItemProps = {
  children: ReactNode;
  href: string;
};

export const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <li>
      <Link href={href} className="rounded-md px-8 py-2 transition-colors hover:bg-gray-200">
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
    <nav className="w-screen border-b border-gray-200 px-20 py-4">
      <ul className="flex justify-between">{children}</ul>
    </nav>
  );
};
