import React, { FC } from 'react';
import { HomeInfoProps } from '@/app/types/componentTypes';
import InfoBox from '@/app/components/InfoBox';

const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center bg-[#419efc] shadow-xl box-shadow-blue rounded-md py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-medium'>Alen</span> ✋
      <br />A Full Stack Developer From Israel.
    </h1>
  ),
  2: (
    <InfoBox
      text='Worked with many companies and picked up many skills along the way'
      link='/about'
      linkTitle='about me'
      btnText='Learn More About Me'
    />
  ),
  3: (
    <InfoBox
      text='Led multiply projects to success over the years, Curios about the impact?'
      link='/projects'
      linkTitle='my projects'
      btnText='Visit My Portfolio'
    />
  ),
  4: (
    <InfoBox
      text='Need a project done or looking for a developer? i`m just a few keystrokes away'
      link='/contact'
      linkTitle='contact me'
      btnText='Lets Talk'
    />
  ),
};

const HomeInfo: FC<HomeInfoProps> = ({ currentStage }) => {
  const content = renderContent[currentStage];

  return content ? content : null;
};

export default HomeInfo;
