'use client';
import { type FC, useLayoutEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const PlayButton: FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
    const audioElement = new Audio(
      'https://res.cloudinary.com/dhrtde6px/video/upload/v1713042368/sakura_j2ysz0.mp3'
    );
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
    <section className='absolute bottom-2 left-3'>
      <button
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        aria-label={!isPlayingMusic ? 'Play music' : 'Mute music'}
        className='flex justify-center items-center p-3 rounded-full text-sky-500 bg-white text-center text-2xl shadow-md'>
        {!isPlayingMusic ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </section>
  );
};

export default PlayButton;
