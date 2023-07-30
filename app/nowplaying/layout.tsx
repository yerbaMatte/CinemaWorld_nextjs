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
    <section className="relative minimum">
      <div>
        <Image
          priority={true}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          src={IMAGE_BASE_URL + BACKDROP_SIZE + path}
          alt={'star wars'}
          className="absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn"
          placeholder="blur"
          blurDataURL="/public/images/placeholder.png"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent" />
      <main className="w-full md:w-11/12 my-0 mx-auto p-4 py-8 z-9 relative">
        <h2 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md py-4 pl-5"'>
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
