'use client';
import type { NextPage } from 'next';
import { type ChangeEvent, Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import emailjs from '@emailjs/browser';
import Wolf from '@/app/models/Wolf';
import Loader from '@/app/components/Loader';
import useAlert from '@/app/hooks/useAlert';
import Alert from '@/app/components/Alert';
import Footer from '@/app/components/Footer';

const ContactPage: NextPage = () => {
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
  const personalEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL as string;

  const [form, setForm] = useState<{ name: string; email: string; message: string }>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState<string>(`magic_wolf|Idle`);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('magic_wolf|run');

    const formData = {
      from_name: form.name,
      to_name: 'Alen',
      from_email: form.email,
      to_email: personalEmail,
      message: form.message,
    };

    emailjs
      .send(
        emailJsServiceId,
        emailJsTemplateId,
        formData as unknown as { [key: string]: string },
        emailJsPublicKey
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ isShow: true, text: 'Message sent successfully!', type: 'success' });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation('magic_wolf|Idle');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('magic_wolf|Idle');
        console.log(error);
        showAlert({
          isShow: false,
          text: "I didn't receive your message.",
          type: 'danger',
        });
      });
  };

  const handleFocus = () => setCurrentAnimation('magic_wolf|walk');
  const handleBlur = () => setCurrentAnimation('magic_wolf|Idle');

  return (
    <>
      <section className='page-container'>
        {alert.show && <Alert {...alert} />}
        <section className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text'>Get in Touch</h1>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 mt-10'>
            <label className='text-black-500 font-semibold '>Name</label>
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label className='text-black-500 font-semibold '>Email</label>
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <label className='text-black-500 font-semibold '>Your Message</label>
            <textarea
              name='message'
              rows={4}
              className='input'
              placeholder='Let me know how i can help you!.'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              aria-label='Submit button'
              type='submit'
              className='btn hover:text-xl transition:text duration-300'
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}>
              {isLoading ? 'Sending...' : ' Send Message'}
            </button>
          </form>
        </section>
        <section className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[300px]'>
          <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
            <directionalLight intensity={2.5} />
            <ambientLight intensity={1} />
            <Suspense fallback={<Loader />}>
              <Wolf
                position={[0.67, -1.45, 0.9]}
                rotation={[12.6, -0.6, 0]}
                scale={[1.5, 1.5, 1.5]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
