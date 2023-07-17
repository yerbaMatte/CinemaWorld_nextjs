import React from 'react';
import { Credits } from '@/types/Movie';
import Link from 'next/link';
import Image from 'next/image';

async function CastGrid({ promise }: { promise: Promise<Credits> }) {
  const { cast } = await promise;
  console.log(cast);
  return (
    <div className='w-full md:w-11/12 my-0 mx-auto px-4'>
      <h1 className='text-cyan-400 my-6 text-2xl'>Cast</h1>
      <div className='grid gap-5 grid-cols-auto-fill'>
        {/* { <div className='rounded p-2 bg-black border border-cyan-900 cursor-pointer hover:neon-shadow hover:opacity-80 duration-300 hover:scale-105'>
          <Link href={`/movies${routeUrl}/${itemId}`} passHref>
            <a>
              <Image
                placeholder='blur'
                blurDataURL='/images/placeholder.png'
                width={375}
                height={563}
                className='rounded opacity-70'
                src={imgUrl}
                alt='thumbnail'
                priority={true}
              />
            </a>
          </Link>

          <h1 className='text-cyan-400 font-bold text-center text-md truncate text-shadow-md'>
            {title}
          </h1>
          {subtitle ? (
            <p className='text-cyan-400 font-semibold text-center text-xs truncate text-shadow-md'>
              {subtitle}
            </p>
          ) : null}
        </div>} */}
      </div>
    </div>
  );
}

export default CastGrid;
