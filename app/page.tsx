'use client';
import type { NextPage } from 'next';
import ClientCanvas from '@/app/components/ClientCanvas';
import { useState } from 'react';
import HomeInfo from '@/app/components/HomeInfo';

const HomePage: NextPage = () => {
  const [currentStage, setCurrentStage] = useState<number>(1);

  return (
    <section className='w-full h-screen relative'>
      <section className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </section>
      <ClientCanvas setCurrentStage={setCurrentStage} />
    </section>
  );
};

export default HomePage;
