import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alen Chernick | Portfolio - About',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section> {children}</section>;
}
