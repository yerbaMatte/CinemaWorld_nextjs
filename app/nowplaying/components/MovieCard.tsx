import React from 'react';
import Image from 'next/legacy/image';

function MovieCard() {
  return (
    <div className='flex border rounded-lg border-theme-900 background-opacity mt-2 py-4 relative'>
      <div className='flex relative w-44 mx-8'>
        <Image
          width={342}
          height={513}
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          src='http://image.tmdb.org/t/p/w342/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg'
          alt='movie'
          priority={true}
          className='rounded-md cursor-pointer border border-theme-600'
        />
      </div>
      <div className='flex flex-col justify-between text-white w-full grow'>
        <div>
          <h2 className='text-3xl pt-2'>
            Star Wars: Episode I - The Phantom Menace
          </h2>
          <div>
            <span className='bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
              Action
            </span>
            <span className='bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
              Comedy
            </span>
            <span className='text-sm'>136 min</span>
          </div>
        </div>
        <p className='py-4'>
          Anakin Skywalker, a young slave strong with the Force, is discovered
          on Tatooine. Meanwhile, the evil Sith have returned, enacting their
          plot for revenge against the Jedi.
        </p>
        <div className='mb-8'>
          <span className='text-sm border rounded text-theme-400 border-theme-300 p-2 mr-3 hover:neon-shadow duration-500 cursor-pointer'>
            08:30 AM
          </span>
          <span className='text-sm border rounded text-theme-400 border-theme-300 p-2 mr-3 hover:neon-shadow duration-500 cursor-pointer'>
            11:30 AM
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
