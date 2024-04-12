import type { FC } from 'react';
import type { AlertProps } from '@/app/types/componentTypes';

const Alert: FC<AlertProps> = ({ type, text }) => {
  return (
    <section className='absolute top-10 left-0 right-0 flex justify-center items-center'>
      <section
        className={`${
          type === 'danger' ? 'bg-red-800/90' : 'bg-blue-800/80'
        } p-2 text-indigo-100 leading-none lg-rounded-full flex lg:inline-flex items-center rounded-lg shadow-sm`}>
        <p
          className={`${
            type === 'danger' ? 'bg-red-500/90' : 'bg-blue-500/80'
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className='mr-2 text-left'>{text}</p>
      </section>
    </section>
  );
};

export default Alert;
