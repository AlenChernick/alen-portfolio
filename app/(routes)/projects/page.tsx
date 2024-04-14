'use client';
import type { NextPage } from 'next';
import type { Project } from '@/app/types/constantTypes';
import { projects } from '@/app/constants';
import { FaArrowRight } from 'react-icons/fa6';
import CallToAction from '@/app/components/CallToAction';
import {
  BsDiscord,
  BsTiktok,
  BsTrello,
  BsFillPersonFill,
  BsFillPersonVcardFill,
} from 'react-icons/bs';
import { MdAdminPanelSettings } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

const ProjectsPage: NextPage = () => {
  const iconComponents: { [key: string]: React.ReactNode } = {
    BsDiscord: <BsDiscord />,
    BsTiktok: <BsTiktok />,
    BsTrello: <BsTrello />,
    BsFillPersonFill: <BsFillPersonFill />,
    MdAdminPanelSettings: <MdAdminPanelSettings />,
    BsFillPersonVcardFill: <BsFillPersonVcardFill />,
  };

  const renderIcon = (iconName: string, iconClassName?: string) => {
    const IconComponent = iconComponents[iconName];
    if (!IconComponent) return null;

    return <section className={iconClassName}>{IconComponent}</section>;
  };

  return (
    <>
      <section className='page-container block-container lg:flex-col'>
        <h1 className='head-text'>
          My
          <span className='blue-gradient-text font-semibold drop-shadow'> Projects</span>
        </h1>
        <section className='mt-5 flex flex-col gap-3 text-slate-500 max-h-48'>
          <p>
            <TypeAnimation
              sequence={[
                `I've embarked on numerous projects throughout the years, but these are the
            ones I hold closest to my heart. Many of them are open-source, so if you come
            across something that piques your interest, feel free to explore the codebase
            and contribute your ideas for further enhancements. Your collaboration is
            highly valued!.`,
              ]}
              speed={70}
              repeat={0}
            />
          </p>
        </section>
        <section className='flex flex-wrap my-20 gap-16'>
          {projects.map((project: Project) => (
            <section className='block-container lg:w-[400px] w-full' key={project.name}>
              <section className='inner-block-container w-12 h-12'>
                <section className={`btn-back rounded-xl ${project.theme}`} />
                <section className='btn-front rounded-xl flex justify-center items-center'>
                  {renderIcon(project.iconName, 'text-white text-center text-3xl')}
                </section>
              </section>
              <section className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-semibold'>{project.name}</h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <section className='mt-5 flex items-center gap-2'>
                  <Link
                    href={project.link}
                    title={project.name}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600 group flex items-center gap-2'>
                    Live Link
                    <FaArrowRight className='text-blue-600 group-hover:translate-x-1 transition-transform duration-200' />
                  </Link>
                </section>
              </section>
            </section>
          ))}
        </section>
        <hr className='border-slate-200' />
        <CallToAction />
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
