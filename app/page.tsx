'use client';
import type { NextPage } from 'next';
import { useState } from 'react';
import HomeInfo from '@/app/components/HomeInfo';
import dynamic from 'next/dynamic';

const ClientCanvas = dynamic(() => import('@/app/components/ClientCanvas'), {
  ssr: false,
});

const PlayButton = dynamic(() => import('@/app/components/PlayButton'), {
  ssr: false,
});

const HomePage: NextPage = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);

  return (
    <section className='w-full h-svh relative disable-haptic-touch-ios'>
      <section className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </section>
      <ClientCanvas setCurrentStage={setCurrentStage} />
      <PlayButton />
    </section>
  );
};

export default HomePage;
