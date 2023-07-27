import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, BACKDROP_SIZE, movieUrl } from '@/config';
import { basicFetch } from '@/api/fetchFunctions';
import { Movie } from '@/types/Movie';
import Link from 'next/link';

async function NowPlayingLayout({ children }: { children: React.ReactNode }) {
  // get background image (star wars)
  let x = await getPoster();
  const path = x.backdrop_path;

  return (
    <section className='relative h-screen'>
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
        <h2 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md py-4 pl-5"'>
          Now we are playing
        </h2>
        <div className='text-sm font-medium text-center text-gray-500 border-t border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
          <ul className='flex flex-wrap -mb-px'>
            <li className='mr-2'>
              <Link href='/nowplaying/mon' className='dayListItem'>
                Monday
              </Link>
            </li>
            <li className='mr-2'>
              <Link
                href='/nowplaying/tue'
                className='inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                aria-current='page'
              >
                Tuesday
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/nowplaying/wed' className='dayListItem'>
                Wednesday
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/nowplaying/thu' className='dayListItem'>
                Thursday
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/nowplaying/fri' className='dayListItem'>
                Friday
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/nowplaying/sat' className='dayListItem'>
                Saturday
              </Link>
            </li>
            <li className='mr-2'>
              <Link href='/nowplaying/sun' className='dayListItem'>
                Sunday
              </Link>
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
