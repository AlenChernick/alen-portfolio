import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from '@/app/components/Navbar';
import { Toaster } from 'react-hot-toast';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Alen Chernick | Portfolio',
  description: `Alen Chernick | Portfolio - Full-stack web developer with extensive knowledge and hands-on experience in developing robust web applications using cutting-edge technologies, including ES6, React, Next.js, Vue.js, Angular, Vuex, Redux, Node.js and Proficient in C# and ASP.NET, with a solid understanding of CSS and SCSS. Experienced in containerization with Docker for CI/CD workflows. Skilled in SQL and NoSQL databases. Dedicated to staying abreast of industry trends and emerging technologies, I am committed to continuous learning and skill expansion. With a proven track record of delivering successful projects, I am confident in my ability to contribute effectively to any team. Eager to further enhance my skills and expertise in the field.`,
  verification: {
    google: 'jjOlobC1-XyopIww85gCu2WmvnMZb8VUbWaANl1pq0I',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <GoogleAnalytics gaId='G-ZYBZ989BFR' />
      <body className={poppins.className}>
        <Toaster position='bottom-right' reverseOrder={false} />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
