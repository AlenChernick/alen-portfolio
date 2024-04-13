export type Skill = {
  imageUrl: string;
  name: string;
  type: string;
};

export type Experience = {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export type SocialLink = {
  name: string;
  iconUrl: string;
  link: string;
};

export type Project = {
  iconUrl: string;
  theme: string;
  name: string;
  description: string;
  link: string;
};
