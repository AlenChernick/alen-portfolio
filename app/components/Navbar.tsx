import Link from 'next/link';
import type { FC } from 'react';
import ClientLink from './ClientLink';

const Navbar: FC = () => {
  return (
    <header className='flex justify-between items-center sm:px-6 px-4 py-4 absolute top-0 bg-transparent z-10 right-0 left-0'>
      <Link
        href='/'
        title='home-page'
        className='w-11 h-11 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <span className='text-sky-500/100 text-xl'>AC</span>
      </Link>
      <nav className='flex text-xl gap-7 font-medium'>
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
