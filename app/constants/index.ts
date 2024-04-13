import { maariv } from '@/public/assets/images';
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  postgresql,
  firebase,
  mssql,
  mysql,
  prisma,
  nextjs,
  nodejs,
  csharp,
  dotnet,
  nestjs,
  pricewise,
  react,
  vuejs,
  angular,
  redux,
  vuex,
  sass,
  tailwindcss,
  typescript,
  gcp,
  azuredevops,
  docker,
  cicd,
} from '@/public/assets/icons';
import type { Experience, Project, Skill, SocialLink } from '@/app/types/constantTypes';

export const skills: Skill[] = [
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: vuejs,
    name: 'Vue.js',
    type: 'Frontend',
  },
  {
    imageUrl: angular,
    name: 'Angular',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: vuex,
    name: 'Vuex',
    type: 'State Management',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: nestjs,
    name: 'NestJS',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: csharp,
    name: 'C#',
    type: 'Backend',
  },
  {
    imageUrl: dotnet,
    name: 'ASP.NET',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: mssql,
    name: 'Microsoft SQL Server',
    type: 'Database',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: firebase,
    name: 'Firebase',
    type: 'Database',
  },
  {
    imageUrl: prisma,
    name: 'Prisma',
    type: 'ORM',
  },
  {
    imageUrl: gcp,
    name: 'Google Cloud Platform',
    type: 'Cloud Computing',
  },
  {
    imageUrl: azuredevops,
    name: 'Azure DevOps',
    type: 'Source Control',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Containerization Platform',
  },
  {
    imageUrl: cicd,
    name: 'CI/CD Tool',
    type: 'Continuous Integration/Continuous Deployment (CI/CD)',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Maariv Online',
    icon: maariv,
    iconBg: '#ffffff',
    date: 'September 2022 - Present',
    points: [
      'Developed and maintained company platforms and CMS for optimal performance and user experience.',
      'Collaborated with cross-functional teams to implement innovative features.',
      'Mentored team developers, focusing on frontend proficiency.',
      'Incorporated SEO and best practices.',
      'Optimized SQL queries for improved data handling',
      'Developed and maintained microservices using C#, ensuring efficient functionality and scalability.',
      'Designed and implemented React-based micro frontends to enhance user interfaces and optimize user experience.',
      'Leading two major projects: refactored existing ASP.NET frontend code to Next.js and integrating CMS with Adobe InDesign.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/AlenChernick',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/alen-chernick',
  },
];

export const projects: Project[] = [
  {
    iconName: 'BsDiscord',
    theme: 'btn-back-purple',
    name: 'Discord Clone - Group Chat',
    description:
      'inspired by Discord using TypeScript, Next.js 14, Tailwind CSS, Prisma, MySQL, WebSocket, Zustand State Management and more.',
    link: 'https://github.com/AlenChernick/discord_clone',
  },
  {
    iconName: 'BsTiktok',
    theme: 'btn-back-red',
    name: 'TikTok Clone - TikTik',
    description:
      'inspired by TikTok using TypeScript, Next.js 12, Tailwind CSS, Sanity CMS & Schemaless Database, Zustand State Management and more.',
    link: 'https://github.com/AlenChernick/tiktik_app',
  },
  {
    iconName: 'BsTrello',
    theme: 'btn-back-blue',
    name: 'Trello Clone - Shmerllo',
    description:
      'inspired by Trello using Vue.js, Sass, Node.js, MongoDB, WebSocket, Vuex State Management and more.',
    link: 'https://github.com/AlenChernick/Sprint4-Shmerllo-frontend',
  },
  {
    iconName: 'BsFillPersonFill',
    theme: 'btn-back-yellow',
    name: 'Job Search App',
    description:
      'Discover your next career move with our Job Search app, crafted with React Native and Expo Router for effortless job exploration',
    link: 'https://github.com/AlenChernick/react_native_jobs_app',
  },
  {
    iconName: 'MdAdminPanelSettings',
    theme: 'btn-back-black',
    name: 'Fhoppy - Admin Dashboard',
    description:
      'Fhoppy is an Admin Demo Dashboard App showcasing a plethora of features including theming, tables, charts, calendar, Kanban, and more. Built solely on the frontend using React, React Context, and Tailwind CSS.',
    link: 'https://github.com/AlenChernick/fhoppy-admin-dashboard',
  },
  {
    iconName: 'BsFillPersonVcardFill',
    theme: 'btn-back-orange',
    name: 'Alen Chernick - Full Stack Developer Portfolio',
    description:
      'This Portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Three.js, integrated with Email.js for seamless communication.',
    link: 'https://github.com/AlenChernick/alen-portfolio',
  },
];
