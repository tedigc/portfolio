import { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
  tag?: 'h1' | 'h2';
};

export const Heading = ({ tag: Tag = 'h1', children }: HeadingProps) => {
  return <Tag className="mb-8 text-2xl font-bold">{children}</Tag>;
};
