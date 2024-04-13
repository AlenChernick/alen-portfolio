import React from 'react';
import { socialLinks } from '@/app/constants';
import { SocialLink } from '@/app/types/constantTypes';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <hr className='border-slate-200' />

      <section className='footer-container'>
        <p>
          © 2024 <strong>Alen Chernick</strong>. All rights reserved.
        </p>

        <section className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link: SocialLink) => (
            <Link key={link.name} href={link.link} target='_blank'>
              <Image
                width={50}
                height={50}
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:brightness-125 hover:translate-y-1 transition-all duration-200'
              />
            </Link>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
