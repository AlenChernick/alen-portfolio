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
        <span className='text-sky-500/100 text-xl hover:text-sky-300/90 transition-text duration-300'>
          AC
        </span>
      </Link>
      <nav className='flex items-center sm:text-2xl text-xl drop-shadow-lg gap-1 md:gap-7 font-medium'>
        <ClientLink
          text='About'
          href='/about'
          title='about-page'
          activeClass='text-blue-500 px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
          defaultClass='text-black px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
        />
        <ClientLink
          text='Projects'
          href='/projects'
          title='projects-page'
          activeClass='text-blue-500 px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
          defaultClass='text-black px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
        />
        <ClientLink
          text='Contact'
          href='/contact'
          title='contact-page'
          activeClass='text-blue-500 px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
          defaultClass='text-black px-3 py-1 hover:bg-[#2f97ff] rounded-lg transition-bg transition-all duration-300'
        />
      </nav>
    </header>
  );
};

export default Navbar;
