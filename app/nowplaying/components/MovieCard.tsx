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
  return (
    <div className='flex border rounded-lg border-theme-900 background-movie-card py-3 my-3 md:p-4 relative animate-fadeIn items-center'>
      <div className='flex relative mx-8 w-40 h-52 xl:w-48 xl:h-64'>
        <Image
          fill={true}
          // width={342}
          // height={513}
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
          {cutStringToCharacters(synopsis, 240)}
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
  );
}

export default MovieCard;
