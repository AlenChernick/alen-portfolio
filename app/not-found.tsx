'use client';
import React, { Suspense } from 'react';
import TvError from './models/TvError';
import { Canvas } from '@react-three/fiber';
import Loader from './components/Loader';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='page-container flex justify-center items-center'>
      <section className='flex flex-col justify-center gap-10 h-[700px] w-full'>
        <h1 className='text-4xl font-bold text-center'>Oops! Page Not Found</h1>
        <Canvas
          className='max-h-[750px] mx-0'
          camera={{ position: [0, 0, 5], fov: 75 }}>
          <directionalLight intensity={2.5} />
          <ambientLight intensity={1} />
          <Suspense
            fallback={
              <Loader className='relative bottom-20 md:right-[3rem] right-[3.7rem] w-52 h-52 border-opacity-20 border-blue-500 border-t-blue-500' />
            }>
            <TvError />
          </Suspense>
        </Canvas>
        <Link
          href='/'
          title='home-page'
          className='btn md:!w-1/2 m-auto text-xs shadow-md '>
          Go Back
        </Link>
      </section>
    </section>
  );
};

export default NotFound;
