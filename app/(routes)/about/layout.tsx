import { Metadata } from 'next';
import { websiteURL } from '@/app/constants';

export const metadata: Metadata = {
  title: 'Alen Chernick | Portfolio - About',
  alternates: {
    canonical: `${websiteURL}/about`,
  },
  openGraph: {
    title: 'Alen Chernick | Portfolio - About',
    url: `${websiteURL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
