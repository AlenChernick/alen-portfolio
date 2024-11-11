import { websiteURL } from '@/app/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alen Chernick | Portfolio - Contact',
  alternates: {
    canonical: `${websiteURL}/contact`,
  },
  openGraph: {
    title: 'Alen Chernick | Portfolio - Contact',
    url: `${websiteURL}/contact`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
