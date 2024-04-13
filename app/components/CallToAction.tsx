import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let's build something together!
      </p>
      <Link
        href='/contact'
        title='contact-page'
        className='btn hover:text-lg transition-text duration-300'>
        Contact
      </Link>
    </section>
  );
};

export default CallToAction;
