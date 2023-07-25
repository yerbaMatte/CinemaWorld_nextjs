import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, BACKDROP_SIZE, movieUrl } from '@/config';
import { basicFetch } from '@/api/fetchFunctions';
import { Movie } from '@/types/Movie';

async function NowPlayingLayout({ children }: { children: React.ReactNode }) {
  let x = await getPoster();
  const path = x.backdrop_path;

  return (
    <section className='relative h-96'>
      <Image
        priority={true}
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={IMAGE_BASE_URL + BACKDROP_SIZE + path}
        alt={'star wars'}
        className='absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn'
        placeholder='blur'
        blurDataURL='/public/images/placeholder.png'
      />

      <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent' />
      <div className='absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent' />
      <main className='w-full md:w-11/12 my-0 mx-auto p-4 py-8 z-9 relative'>
        <h2 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md pl-5"'>
          Now we are playing
        </h2>
        <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Monday
              </a>
            </li>
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                aria-current='page'
              >
                Tuesday
              </a>
            </li>
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Wednesday
              </a>
            </li>{' '}
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Thursday
              </a>
            </li>{' '}
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Friday
              </a>
            </li>{' '}
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Saturday
              </a>
            </li>{' '}
            <li className='mr-2'>
              <a
                href='#'
                className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              >
                Sunday
              </a>
            </li>
          </ul>
        </div>
        {children}
      </main>
    </section>
  );
}

export default NowPlayingLayout;

export const getPoster = async () => {
  const movieEndpoint: string = movieUrl('1893');
  const movieResp = await basicFetch<Movie>(movieEndpoint);

  return movieResp;
};
