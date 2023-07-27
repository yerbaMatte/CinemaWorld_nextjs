import React from 'react';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';
import Image from 'next/legacy/image';

const days: { [key: string]: string } = {
  mon: 'MONDAY!',
  tue: '',
  wed: '',
  thu: '',
  fri: '',
  sut: '',
  sun: '',
};

function DayListPage({ params: { dayId } }: { params: { dayId: string } }) {
  if (days[dayId] === undefined) {
    throw new Error('There is no such a resource to display');
  }

  return (
    <div className='flex border rounded-lg border-theme-900 background-opacity mt-2 py-4'>
      <div className='flex relative w-44 px-8 '>
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
        <h2 className='text-2xl pt-4'>
          Star Wars: Episode I - The Phantom Menace
        </h2>
        <div>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            Action
          </span>
          <span className='bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>
            Comedy
          </span>
          <span className='text-sm'>136 min</span>
        </div>
        <p className='py-4'>
          Anakin Skywalker, a young slave strong with the Force, is discovered
          on Tatooine. Meanwhile, the evil Sith have returned, enacting their
          plot for revenge against the Jedi.
        </p>
        <span className='border font-bold rounded bg-theme-400 text-black border-theme-300 inline'>
          11:30 AM
        </span>
        <div>
          <button className='text-sm border rounded text-theme-400 border-theme-300 p-2 hover:neon-shadow duration-500 mr-2'>
            Buy Ticket
          </button>
          <button className='text-sm border rounded text-theme-400 border-theme-300 p-2 hover:neon-shadow duration-500'>
            Available seats
          </button>
        </div>
      </div>
    </div>
  );
}

export default DayListPage;
