'use client';
import Image from 'next/image';
import type { NextPage } from 'next';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useInView } from 'react-intersection-observer';
import { skills, experiences } from '@/app/constants';
import type { Experience, Skill } from '@/app/types/constantTypes';
import CallToAction from '@/app/components/CallToAction';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '@/app/components/Footer';

const AboutPage: NextPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
      <section className='page-container lg:flex-col min-h-full'>
        <h1 className='head-text'>
          Hello, {"I'm"}
          <span className='blue-gradient-text font-semibold drop-shadow'> Alen</span>
        </h1>
        <section className='card-container mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Full-stack web developer with extensive knowledge and hands-on experience in
            developing robust web applications using cutting-edge technologies.
          </p>
        </section>
        <section className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
          <section className='mt-16 flex md:justify-normal justify-center flex-wrap md:gap-12 gap-10'>
            {skills.map((skill: Skill, index: number) => (
              <section
                className='block-container w-20 h-20'
                key={`skill-${skill.name}-${index}`}>
                <section className='btn-back rounded-xl' />
                <section className='btn-front rounded-xl flex justify-center items-center'>
                  <Image
                    fetchPriority='high'
                    loading='eager'
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <section className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              Dedicated to staying abreast of industry trends and emerging technologies, I
              am committed to continuous learning and skill expansion. With a proven track
              record of delivering successful projects, I am confident in my ability to
              contribute effectively to any team. Eager to further enhance my skills and
              expertise in the field.
            </p>
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
