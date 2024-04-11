import type { NextPage } from 'next';
import ClientCanvas from '@/app/components/ClientCanvas';

const HomePage: NextPage = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* <section className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>POPUP</section> */}
      <ClientCanvas />
    </section>
  );
};

export default HomePage;
