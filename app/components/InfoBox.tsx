import Link from 'next/link';
import type { FC } from 'react';
import type { InfoBoxProps } from '@/app/types/componentTypes';
import { FaArrowRight } from 'react-icons/fa6';

const InfoBox: FC<InfoBoxProps> = ({ text, link, btnText, linkTitle }) => (
  <section className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link
      className='bg-white font-medium absolute bottom-[-10px] left-0 right-0 md:max-w-80 max-w-72 mx-auto rounded-md text-[#419efc] box-shadow-white flex justify-center items-center px-3 py-3 gap-3'
      href={link}
      title={linkTitle}>
      {btnText}
      <FaArrowRight />
    </Link>
  </section>
);

export default InfoBox;
