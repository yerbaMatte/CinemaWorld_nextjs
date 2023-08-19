import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, BACKDROP_SIZE, movieUrl } from '@/config';
import { basicFetch } from '@/api/fetchFunctions';
import { Movie } from '@/types/Movie';
import DaysNavigation from './components/DaysNavigation';
import { GoBackButton } from '../movies/[movieId]/components';

async function NowPlayingLayout({ children }: { children: React.ReactNode }) {
  // get background image (star wars)
  let x = await getPoster();
  const path = x.backdrop_path;

  return (
    <section className='relative sm:h-352'>
      <Image
        objectFit='cover'
        objectPosition='40% 30%'
        layout='fill'
        src={IMAGE_BASE_URL + BACKDROP_SIZE + path}
        alt={'star wars'}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
      />
      <div className='absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent' />
      <div className='absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent' />
      <main className='w-full md:w-11/12 my-0 mx-auto p-4 py-8 z-9 relative'>
        <h2 className='text-xl sm:text-2xl font-semibold text-theme-400 text-shadow-md py-4 pl-5'>
          Now we are playing
        </h2>
        <DaysNavigation />
        {children}
      </main>
      <GoBackButton />
    </section>
  );
}

export default NowPlayingLayout;

export const getPoster = async () => {
  const movieEndpoint: string = movieUrl('1893');
  const movieResp = await basicFetch<Movie>(movieEndpoint);

  return movieResp;
};
