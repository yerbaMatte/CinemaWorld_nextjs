import React from 'react';
import Image from 'next/image';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';
import Link from 'next/link';
import { cutStringToCharacters } from '@/utils/helpers';

type PlayingMovies = {
  id: number;
  posterPath: string;
  genres: { name: string; id: number }[];
  title: string;
  synopsis: string;
  duration: number;
  rating: number;
  start: string;
};

function MovieCard({ details }: { details: PlayingMovies }) {
  const { title, genres, duration, synopsis, start, posterPath, rating, id } =
    details;
  console.log(posterPath);
  return (
    <>
      {/* DESKTOP MovieCard */}
      <div className='hidden sm:flex border rounded-lg border-theme-900 bg-black-shadow py-3 my-3 md:p-4 relative animate-fadeIn items-center'>
        <div className='flex relative sm:mx-4 md:mx-8 w-44 h-64 shrink-0'>
          <Image
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
            src={IMAGE_BASE_URL + THUMB_SIZE + posterPath}
            alt='movie'
            className='rounded-md cursor-pointer border border-theme-800'
          />
        </div>
        <div className='flex flex-col justify-between text-white w-full grow'>
          <div>
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl xl:text-3xl xl:mt-2'>{title}</h2>
              <div className='text-white text-2xl xl:text-3xl font-bold p-4 whitespace-nowrap'>
                ✪ {!rating ? '0/10' : `${rating.toFixed(2)}`}
              </div>
            </div>

            <div>
              {genres.map((genre: { name: string; id: number }) => (
                <span
                  className='bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
              <span className='text-sm'>{duration} min</span>
            </div>
          </div>
          <p className='hidden py-2 xl:py-4 mr-32 xl:block'>
            {cutStringToCharacters(synopsis, 280)}
            <Link
              href={`/movies/${id}`}
              className='text-theme-600 underline hover:text-white'
            >
              read more
            </Link>
          </p>
          <p className='py-2 xl:py-4 xl:hidden mr-4'>
            {cutStringToCharacters(synopsis, 120)}
            <Link
              href={`/movies/${id}`}
              className='text-theme-600 underline hover:text-white'
            >
              read more
            </Link>
          </p>
          <div className='flex justify-between items-center mb-4'>
            <span className='border rounded p-1 lg:text-lg lg:p-3 lg:py-2 text-theme-400 border-theme-300 hover:neon-shadow duration-500 cursor-pointer'>
              {start}
            </span>
          </div>
        </div>
      </div>
      {/* MOBILE MovieCard */}
      <div className='flex flex-col bg-black-shadow relative animate-fadeIn items-center sm:hidden text-white rounded-xl border my-4 border-gray-700'>
        <div className='flex justify-center w-full rounded-t-lg p-4 gradient-bg border-gray-600 border-t-gray-200'>
          <h2 className='text-xl md:text-2xl text-center '>{title}</h2>
        </div>
        <div className='flex relative sm:mx-4 md:mx-8 w-64 h-96 shrink-0 rounded-xl overflow-hidden'>
          <Image
            width={500}
            height={300}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='
            src={IMAGE_BASE_URL + THUMB_SIZE + posterPath}
            alt='movie'
            className=''
          />
          <div className='bg-theme-900 rotate-45 text-white text-xl xl:text-3xl font-bold whitespace-nowrap absolute top-2 right-0 translate-x-12 py-2 px-12 border'>
            ✪ {!rating ? '0/10' : `${rating.toFixed(2)}`}
          </div>
        </div>
        <div className='flex flex-col justify-between w-full grow p-4'>
          <div className='flex flex-col'>
            <div className='flex flex-wrap items-center'>
              {genres.map((genre: { name: string; id: number }) => (
                <span
                  className='m-1 bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
              <span className='text-sm'>{duration} min</span>
            </div>
          </div>
          <p className='py-2'>
            {cutStringToCharacters(synopsis, 80)}
            <Link
              href={`/movies/${id}`}
              className='text-theme-600 underline hover:text-white'
            >
              read more
            </Link>
          </p>
        </div>
        <div className='border-t p-1 text-theme-100 border-gray-600 hover:neon-shadow duration-500 cursor-pointer text-center w-full'>
          BOOK NOW FOR <span className='font-extrabold'>{start}</span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
