'use client';
import type { NextPage } from 'next';
import ClientCanvas from '@/app/components/ClientCanvas';
import { useState, useLayoutEffect, useRef } from 'react';
import HomeInfo from '@/app/components/HomeInfo';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const HomePage: NextPage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentStage, setCurrentStage] = useState<number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlayingMusic]);

  useLayoutEffect(() => {
    const audioElement = new Audio('/assets/sakura.mp3');
    audioElement.volume = 0.4;
    audioElement.loop = true;
    audioRef.current = audioElement;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section className='w-full h-svh relative'>
      <section className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </section>
      <ClientCanvas setCurrentStage={setCurrentStage} />
      <section className='absolute bottom-2 left-2'>
        <button
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          aria-label={!isPlayingMusic ? 'Play music' : 'Mute music'}
          className='flex justify-center items-center p-3 rounded-full text-sky-500 bg-white text-center text-2xl shadow-md'>
          {!isPlayingMusic ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </section>
    </section>
  );
};

export default HomePage;
