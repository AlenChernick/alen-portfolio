import { type FC } from 'react';
import { Html } from '@react-three/drei';
import { MoonLoader } from 'react-spinners';
import { LoaderProps } from '../types/componentTypes';

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <Html>
      <section className='flex justify-center items-center'>
        <MoonLoader
          className={
            className
              ? className
              : 'relative bottom-10 md:right-[2.3rem] right-[3.9rem] w-52 h-52 border-opacity-20 border-blue-500 border-t-blue-500'
          }
          color='rgba(1, 38, 95, 1)'
          size={90}
          speedMultiplier={0.8}
        />
      </section>
    </Html>
  );
};

export default Loader;
