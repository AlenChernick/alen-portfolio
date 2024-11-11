'use client';
import Image from 'next/image';
import type { NextPage } from 'next';
import type { Experience, Skill } from '@/app/types/constantTypes';
import { useMemo, useRef } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';
import { skills, experiences } from '@/app/constants';
import CallToAction from '@/app/components/CallToAction';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '@/app/components/Footer';
import { TypeAnimation } from 'react-type-animation';
import ToolTip from '@/app/components/ToolTip';
import useMobile from '@/app/hooks/useMobile';

const AboutPage: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const isMobile = useMobile();

  return (
    <>
      <section className='page-container lg:flex-col min-h-full'>
        <h1 className='head-text'>
          Hello, {"I'm"}
          <span className='blue-gradient-text font-semibold drop-shadow'>
            {' '}
            Alen
          </span>
        </h1>
        <section className='card-container mt-5 flex flex-col gap-3 text-slate-500 min-h-12'>
          <p>
            <TypeAnimation
              sequence={[
                `Full-stack web developer with extensive knowledge and hands-on experience in
              developing robust web applications using cutting-edge technologies.`,
              ]}
              speed={65}
              repeat={0}
            />
          </p>
        </section>

        <section className='py-10 flex flex-col'>
          <h2 className='subhead-text'>My Skills</h2>
          <section className='mt-16 flex md:justify-normal justify-center flex-wrap md:gap-12 gap-10'>
            {skills.map((skill: Skill, index: number) => (
              <section
                className='block-container w-20 h-20 group relative'
                key={`skill-${skill.name}-${index}`}>
                <section className='btn-back rounded-xl' />
                <section className='flex-col gap-1 btn-front rounded-xl flex justify-center items-center'>
                  <Image
                    priority={isMobile ? false : true}
                    src={skill.imageUrl}
                    width={40}
                    height={40}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                  <span className='text-xs text-center'>{skill.name}</span>
                </section>
                <ToolTip text={skill.type} />
              </section>
            ))}
          </section>
        </section>
        <section className='py-16'>
          <h2 className='subhead-text'>Work Experience</h2>
          <section className='mt-5 flex flex-col gap-3 text-slate-500'>
            {inView && (
              <p>
                <TypeAnimation
                  sequence={[
                    `Dedicated to staying abreast of industry trends and emerging technologies, I
                      am committed to continuous learning and skill expansion. With a proven track
                      record of delivering successful projects, I am confident in my ability to
                      contribute effectively to any team. Eager to further enhance my skills and
                      expertise in the field.`,
                  ]}
                  speed={70}
                  repeat={0}
                />
              </p>
            )}
          </section>
          <section className='mt-12 flex md:min-h-full' ref={ref}>
            <VerticalTimeline>
              {experiences.map((experience: Experience) => (
                <VerticalTimelineElement
                  visible={inView}
                  key={experience.companyName}
                  date={experience.date}
                  icon={
                    <section className='flex justify-center items-center w-full h-full'>
                      <Image
                        width={50}
                        height={50}
                        src={experience.icon}
                        alt={experience.companyName}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </section>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}>
                  <section>
                    <h3 className='text-black text-xl font-semibold'>
                      {experience.title}
                      <p className='text-black-500 font-medium'>
                        {experience.companyName}
                      </p>
                    </h3>
                  </section>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>
        </section>
        <hr className='border-slate-200' />
        <CallToAction />
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
