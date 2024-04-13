import Link from 'next/link';
import type { FC } from 'react';
import ClientLink from './ClientLink';

const Navbar: FC = () => {
  return (
    <header className='flex justify-between items-center sm:px-6 max-w-5xl m-auto px-4 py-4 absolute top-0 bg-transparent z-10 right-0 left-0'>
      <Link
        href='/'
        title='home-page'
        className='w-11 h-11 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
        <span className='blue-gradient_text text-xl hover:text-sky-300/90 transition-text duration-300'>
          AC
        </span>
      </Link>
      <nav className='flex items-center sm:text-2xl text-lg drop-shadow-lg md:gap-7 gap-4 font-medium'>
        <ClientLink
          text='About'
          href='/about'
          title='about-page'
          activeClass='text-blue-500'
          defaultClass='text-black hover:drop-shadow-xl transition-drop-shadow duration-300'
        />
        <ClientLink
          text='Projects'
          href='/projects'
          title='projects-page'
          activeClass='text-blue-500'
          defaultClass='text-black hover:drop-shadow-xl transition-drop-shadow duration-300'
        />
        <ClientLink
          text='Contact'
          href='/contact'
          title='contact-page'
          activeClass='text-blue-500'
          defaultClass='text-black hover:drop-shadow-xl transition-drop-shadow duration-300'
        />
      </nav>
    </header>
  );
};

export default Navbar;
