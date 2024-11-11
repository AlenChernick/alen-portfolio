import { websiteURL } from '@/app/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alen Chernick | Portfolio - Projects',
  alternates: {
    canonical: `${websiteURL}/projects`,
  },
  openGraph: {
    title: 'Alen Chernick | Portfolio - Projects',
    url: `${websiteURL}/projects`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
