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
    <div className='relative grow text-theme-600'>
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
      <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent' />
      <div className='absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent' />
      {/* GRID */}
      <div className='p-8 grid grid-cols-7 gap-3 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-3xl font-semibold mb-4 col-span-7 bg-black-shadow text-theme-100 text-center py-12 px-32 rounded-3xl'>
          Cinema World - Project Description
        </h1>
        <div className='flex flex-col items-center justify-center col-span-1 bg-black-shadow rounded-3xl p-6'>
          <h2 className='text-2xl p-2 border-b'>Stack</h2>
          <div className='h-16 w-16 my-2 bg-white rounded-full'>
            <Image src={nextIcon} alt='react icon' />
          </div>
          <div className='h-16 w-16 my-2'>
            <Image src={reactIcon} alt='react icon' />
          </div>
          <div className='h-16 w-16 my-2'>
            <Image src={typescriptIcon} alt='react icon' />
          </div>
          <div className='h-16 w-16 my-2'>
            <Image src={firebaseIcon} alt='react icon' />
          </div>
          <div className='h-16 w-16 my-2'>
            <Image src={tailwindIcon} alt='react icon' />
          </div>
        </div>
        <div className='col-span-3 bg-black-shadow rounded-3xl p-6'>
          <h2 className='text-center text-2xl p-2 border-b'>Description</h2>
          <ul className='list-disc'>
            <li>Server-side rendering</li>
            <li>Dynamic pages</li>
            <li>Firebase Integration</li>
            <li>Tailwind CSS RWD</li>
            <li>SEO support</li>
          </ul>
        </div>
        <div className='col-span-3 bg-black-shadow rounded-3xl p-6'>
          <h2 className='text-center text-2xl p-2 border-b'>On the way </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
