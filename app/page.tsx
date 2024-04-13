'use client';
import type { NextPage } from 'next';
import ClientCanvas from '@/app/components/ClientCanvas';
import { useState, useLayoutEffect, useRef } from 'react';
import HomeInfo from '@/app/components/HomeInfo';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const HomePage: NextPage = () => {
  const audioRef = useRef(new Audio('/assets/sakura.mp3'));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className='w-full h-screen relative'>
      <section className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </section>
      <ClientCanvas setCurrentStage={setCurrentStage} />
      <section className='absolute bottom-2 left-2'>
        <button
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='flex justify-center items-center p-3 rounded-full text-sky-500 bg-white text-center text-2xl shadow-md'>
          {!isPlayingMusic ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </section>
    </section>
  );
};

export default HomePage;
