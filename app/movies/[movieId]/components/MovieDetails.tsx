import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '@/config';
import { calcTime, convertMoney } from '@/utils/helpers';
import { Movie, Credits } from '@/types/Movie';

type MovieDetailsProps = {
  movie: Movie;
  cast: Promise<Credits>;
};

const MovieDetails = async ({ movie, cast }: MovieDetailsProps) => {
  const {
    backdrop_path,
    budget,
    genres,
    overview,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
  } = movie;

  const directorsData = await cast;
  const directors = directorsData.crew.filter(
    (person) => person.job === 'Director'
  );

  return (
    <div className='relative animate-fadeIn'>
      {/* Overlay */}
      <div className='absolute top-0 inset-0 bg-brand-900 bg-opacity-100' />
      <div className='absolute top-0 inset-0 bg-gradient-to-r from-[#010404] via-transparent to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-t from-[#010404] via-transparent to-transparent' />
      <div className='absolute inset-0 bg-gradient-to-b from-[#010404] via-transparent to-transparent' />

      <Image
        priority={true}
        placeholder='blur'
        blurDataURL='/images/placeholder.png'
        objectFit='cover'
        objectPosition='center'
        layout='fill'
        src={IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path}
        alt='movie poster background'
        className='absolute inset-0 w-full h-full object-cover -z-10'
      />

      <div className='relative w-full pt-80 pb-64 px-4 md:px-8'>
        {tagline && (
          <span className='text-2xl md:text-3xl xl:text-5xl italic text-shadow-md text-white my-1 block font-thin'>
            &quot;{tagline}&quot;
          </span>
        )}

        <h2 className='text-theme-400 text-4xl md:text-5xl md:max-w-[70%] xl:text-6xl font-bold text-shadow-md uppercase tracking-wide my-3'>
          {title}
        </h2>

        <div className='text-gray-300 text-sm p-1'>
          <span>
            {!release_date ? 'No Release Data' : `${release_date}`}{' '}
            <span className='text-theme-500 text-lg'>|</span>{' '}
          </span>
          <span>
            {calcTime(runtime)}
            <span className='text-theme-500 text-lg'>|</span>{' '}
          </span>
          {genres?.map((genre, index) => {
            const isEndofArray = index === genres.length - 1;

            return (
              <span key={genre.id}>
                {genre.name}
                {isEndofArray ? '' : ', '}
              </span>
            );
          })}
        </div>

        <div className='text-white text-3xl md:text-4xl xl:text-5xl font-bold text-shadow-md uppercase tracking-wide my-3'>
          ✪ {!vote_average ? '0/10' : `${vote_average.toFixed(2)}`}
        </div>

        <div className='w-full text-sm md:max-w-[70%] text-gray-200 text-shadow-md mt-6'>
          <h3 className='text-theme-400 text-md font-bold'>Overview</h3>
          <span className='text-gray-200 italic text-sm'>{overview}</span>
        </div>

        <div className='w-full text-sm md:max-w-[70%] text-gray-200 text-shadow-md mt-6'>
          <h3 className='text-theme-400 text-md font-bold'>
            Director
            {directors.length > 1 ? 's' : ''}:{` `}
          </h3>
          <span>
            {directors.map((director) => (
              <span
                className='text-gray-200 italic text-sm'
                key={director.credit_id}
              >
                {director.name}
                {` `}
              </span>
            ))}
          </span>
        </div>
        <div className='mt-6 flex gap-2 '>
          <div className='flex items-center gap-2 border font-bold rounded bg-theme-400 text-black border-theme-300 py-2 px-4 text-sm'>
            Budget | {convertMoney(budget)}
          </div>
          <div className='flex items-center gap-2 border font-bold rounded bg-theme-400 text-black border-theme-300 py-2 px-4 text-sm'>
            Revenue | {convertMoney(revenue)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
