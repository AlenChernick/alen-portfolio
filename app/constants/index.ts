import type {
  Experience,
  Project,
  Skill,
  SocialLink,
} from '@/app/types/constantTypes';

export const skills: Skill[] = [
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042258/icons/javascript_nx1gjd.svg',
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042171/icons/typescript_xd4jvs.svg',
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042257/icons/html_ugl6pj.svg',
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042252/icons/css_vqxidl.svg',
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042170/icons/sass_tnomyo.svg',
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042171/icons/tailwindcss_mtjpqr.svg',
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042170/icons/react_skw7qo.svg',
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042168/icons/nextjs_y4rsnp.svg',
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042172/icons/vuejs_nnvjtz.svg',
    name: 'Vue.js',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042251/icons/angular_zxb3df.svg',
    name: 'Angular',
    type: 'Frontend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042170/icons/redux_ndflh0.svg',
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042172/icons/vuex_ufc6lj.svg',
    name: 'Vuex',
    type: 'State Management',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042169/icons/nodejs_ttrscr.svg',
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042168/icons/nestjs_irqsr7.svg',
    name: 'NestJS',
    type: 'Backend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042254/icons/express_thjbt1.svg',
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042252/icons/csharp_ebbc4p.svg',
    name: 'C#',
    type: 'Backend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042253/icons/dotnet_sotgqp.svg',
    name: 'ASP.NET',
    type: 'Backend',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042160/icons/mongodb_qbbjos.svg',
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042160/icons/mssql_wmvhif.svg',
    name: 'Microsoft SQL Server',
    type: 'Database',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042160/icons/mysql_ildd9w.svg',
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042169/icons/postgresql_x272rb.svg',
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042255/icons/firebase_fszeqe.svg',
    name: 'Firebase',
    type: 'Database',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042170/icons/prisma_ym1m4q.svg',
    name: 'Prisma',
    type: 'ORM',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042255/icons/gcp_cj5npb.svg',
    name: 'Google Cloud',
    type: 'Cloud Computing',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042251/icons/azuredevops_sc6ytp.svg',
    name: 'Azure DevOps',
    type: 'Source Control',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042253/icons/docker_ukxfyu.svg',
    name: 'Docker',
    type: 'Containerization Platform',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042251/icons/ci-cd_mmvzxy.svg',
    name: 'CI / CD',
    type: 'Cloud Computing',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042256/icons/git_ygujlw.svg',
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042256/icons/github_mfn9wm.svg',
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Maariv Online',
    icon: 'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042259/icons/maariv_npxro0.svg',
    iconBg: '#ffffff',
    date: 'September 2022 - Present',
    points: [
      'Developed and maintained company platforms and CMS, ensuring optimized performance and superior user experiences.',
      'Orchestrated cross-functional collaboration to conceive, plan, and implement innovative features, enhancing product competitiveness.',
      'Mentored team developers in frontend proficiency, fostering a skilled workforce and ensuring high quality deliverables.',
      'Implemented strategic SEO techniques, driving significant organic traffic growth and enhancing online visibility',
      'Optimized SQL queries, improving system performance and data handling efficiency.',
      'Developed and maintained microservices in C#, ensuring seamless functionality and scalability.',
      'Engineered React-based micro frontends, enhancing user interfaces and increasing user engagement.',
      'Integrated CMS with Adobe InDesign, revolutionizing content management workflows and boosting productivity.',
      'Refactored ASP.NET frontend code to Next.js, leveraging modern web technologies for enhanced performance.',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Contact',
    iconUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042252/icons/contact_asdakg.svg',
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042256/icons/github_mfn9wm.svg',
    link: 'https://github.com/AlenChernick',
  },
  {
    name: 'LinkedIn',
    iconUrl:
      'https://res.cloudinary.com/dhrtde6px/image/upload/v1713042258/icons/linkedin_uwzsxo.svg',
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
    iconName: 'BsFillPersonVcardFill',
    theme: 'btn-back-orange',
    name: 'Alen Chernick - Portfolio',
    description:
      'This Portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Three.js, integrated with Email.js for seamless communication.',
    link: 'https://github.com/AlenChernick/alen-portfolio',
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
    iconName: 'MdAdminPanelSettings',
    theme: 'btn-back-black',
    name: 'Fhoppy - Admin Dashboard',
    description:
      'Fhoppy is an Admin Demo Dashboard App showcasing a plethora of features including theming, tables, charts, calendar, Kanban, and more. Built solely on the frontend using React, React Context, and Tailwind CSS.',
    link: 'https://github.com/AlenChernick/fhoppy-admin-dashboard',
  },
  {
    iconName: 'BsFillPersonFill',
    theme: 'btn-back-yellow',
    name: 'Job Search App',
    description:
      'Discover your next career move with our Job Search app, crafted with React Native and Expo Router for effortless job exploration',
    link: 'https://github.com/AlenChernick/react_native_jobs_app',
  },
];
