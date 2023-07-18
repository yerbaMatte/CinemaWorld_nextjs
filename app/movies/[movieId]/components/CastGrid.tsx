import React from 'react';
import { Credits } from '@/types/Movie';
import Link from 'next/link';
import Image from 'next/image';
import { IMAGE_BASE_URL, POSTER_SIZE } from '@/config';

async function CastGrid({ promise }: { promise: Promise<Credits> }) {
  const { cast } = await promise;

  return (
    <div className='w-full md:w-11/12 my-0 mx-auto px-4'>
      <h1 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md m-4'>
        CAST
      </h1>
      <div className='grid gap-5 grid-cols-auto-fill border-none'>
        {cast.map((actor, indx) => {
          const { name, character, profile_path } = actor;

          return actor.profile_path ? (
            <div
              key={indx}
              className='rounded cursor-pointer opacity-50 hover:neon-shadow hover:scale-105 hover:opacity-100 duration-500'
            >
              <Link href='#'>
                <Image
                  placeholder='blur'
                  blurDataURL='/images/placeholder.png'
                  width={375}
                  height={563}
                  className='rounded'
                  src={IMAGE_BASE_URL + POSTER_SIZE + profile_path}
                  alt='thumbnail'
                  priority={true}
                />
              </Link>

              <h1 className='text-theme-400 font-bold text-center text-md truncate text-shadow-md'>
                {name}
              </h1>
              {character ? (
                <p className='text-theme-400 font-semibold text-center text-xs truncate text-shadow-md'>
                  {character}
                </p>
              ) : null}
            </div>
          ) : (
            ''
          );
        })}
      </div>
    </div>
  );
}

export default CastGrid;
