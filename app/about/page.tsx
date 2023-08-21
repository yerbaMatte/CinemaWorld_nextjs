import Image from 'next/legacy/image';
import reactIcon from '../../public/images/react.svg';
import nextIcon from '../../public/images/nextjs.svg';
import typescriptIcon from '../../public/images/typescript.svg';
import tailwindIcon from '../../public/images/tailwind.svg';
import firebaseIcon from '../../public/images/firebase.svg';
import bgLogo from '../../public/images/bg-about.webp';
import React from 'react';

function AboutPage() {
  return (
    <div className='relative grow text-theme-600 flex justify-center items-center'>
      {/* BG */}
      <Image
        priority={true}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={bgLogo}
        alt='background image with movie posters'
        className='absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn'
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
      />
      {/* GRADIENT */}
      <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent -z-10' />
      <div className='absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent -z-10' />

      {/* GRID */}
      <div className='grid grid-cols-7 gap-3 z-0 max-w-7xl fade-in'>
        {/* HEADER */}
        <h1 className='text-2xl sm:text-3xl font-semibold col-span-7 bg-black-shadow text-theme-300 py-12 px-8 sm:px-24 md:px-32 rounded-3xl text-center'>
          Cinema World - Project Description
        </h1>

        {/* USED STACK */}
        <div className='flex md:flex-col items-center justify-center col-span-7 md:col-span-1 bg-black-shadow rounded-3xl p-6'>
          <h2 className='hidden text-xl p-2 border-b md:block'>Stack</h2>
          <div className='relative mx-4 h-auto md:mx-0 md:w-16 my-2'>
            <Image src={nextIcon} alt='react icon' />
          </div>
          <div className='relative mx-4 h-auto md:mx-0 md:w-16 my-2'>
            <Image src={reactIcon} alt='react icon' />
          </div>
          <div className='relative mx-4 h-auto md:mx-0 md:w-16 my-2'>
            <Image src={typescriptIcon} alt='react icon' />
          </div>
          <div className='relative mx-4 h-auto md:mx-0 md:w-16 my-2'>
            <Image src={firebaseIcon} alt='react icon' />
          </div>
          <div className='relative mx-4 h-auto md:mx-0 md:w-16 my-2'>
            <Image src={tailwindIcon} alt='react icon' />
          </div>
        </div>

        {/* DESCRIPTION UL */}
        <div className='col-span-7 md:col-span-2 bg-black-shadow rounded-3xl p-6 '>
          <h2 className='text-center text-xl p-2 border-b'>Description</h2>
          <ul className='list-disc pl-6 pt-3'>
            <li>Server-side rendering</li>
            <li>Dynamic pages</li>
            <li>Firebase Integration</li>
            <li>Tailwind CSS RWD</li>
            <li>SEO support</li>
            <li>React hook form</li>
            <li>Yup</li>
            <li>TMDB Data API</li>
            <li>React Context</li>
            <li>Authentication</li>
            <li>Code versioning with Git</li>
            <li>Performance optimization</li>
          </ul>
        </div>

        {/* ON THE WAY UI */}
        <div className='col-span-7 md:col-span-4 bg-black-shadow rounded-3xl p-6'>
          <h2 className='text-center text-xl p-2 border-b'>On the way </h2>
          <ul className='list-disc pl-6 pt-3'>
            <li>Firebase Firestore for storing user&apos;s booked tickets</li>
            <li>Progressive Web App (PWA)</li>
            <li>Designing UI for movie booking</li>
            <li>Implementing seat selection functionality</li>
            <li>Providing a smooth checkout process with payment options</li>
            <li>
              Implementing Google registration for simplified account creation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
