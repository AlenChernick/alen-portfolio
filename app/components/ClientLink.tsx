'use client';

import type { FC } from 'react';
import type { ClientLink } from '@/app/types/componentTypes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ClientLink: FC<ClientLink> = ({ text, href, title, activeClass, defaultClass }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      title={title}
      className={`${pathname === href ? activeClass : defaultClass}`}>
      {text}
    </Link>
  );
};

export default ClientLink;
