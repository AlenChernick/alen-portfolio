import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  return [
    {
      url: 'https://alen-portfolio.vercel.app',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://alen-portfolio.vercel.app/about',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://alen-portfolio.vercel.app/projects',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://alen-portfolio.vercel.app/contact',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
