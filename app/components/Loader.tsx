'use client';
import type { FC } from 'react';
import { Html } from '@react-three/drei';

const Loader: FC = () => {
  return (
    <Html>
      <section className='flex justify-center items-center'>
        <section className='relative sm:right-24 right-20 bottom-32 w-40 h-40 p-10 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin' />
      </section>
    </Html>
  );
};

export default Loader;
