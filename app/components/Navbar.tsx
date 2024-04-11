import Link from 'next/link';
import type { FC } from 'react';
import ClientLink from './ClientLink';

const Navbar: FC = () => {
  return (
    <header className='flex items-center justify-between p-2'>
      <Link
        href='/'
        title='home-page'
        className='w-11 h-11 rounded-lg bg-slate-50s items-center justify-center flex font-bold shadow-md'>
        <span className='text-sky-300/70 text-lg'>AC</span>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <ClientLink
          text='About'
          href='/about'
          title='about-page'
          activeClass='text-blue-500'
          defaultClass='text-black'
        />
        <ClientLink
          text='Projects'
          href='/projects'
          title='projects-page'
          activeClass='text-blue-500'
          defaultClass='text-black'
        />
        <ClientLink
          text='Contact'
          href='/contact'
          title='contact-page'
          activeClass='text-blue-500'
          defaultClass='text-black'
        />
      </nav>
    </header>
  );
};

export default Navbar;
