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
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/urlink',
  },
];
