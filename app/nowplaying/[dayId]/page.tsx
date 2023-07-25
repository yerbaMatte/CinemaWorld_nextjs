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
    <div className='bg-white flex'>
      <div className='flex relative'>
        <Image
          width={342}
          height={513}
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          src='http://image.tmdb.org/t/p/w342/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg'
          alt='movie'
          priority={true}
          className='rounded-md bg-theme-900 cursor-pointer'
        />
      </div>
      <div className='bg-theme-600 text-white'>
        <h2>Title</h2>
        <div>
          Genres <span>Duration</span>
        </div>
        <p>Description</p>
        <div>Available hours</div>
        <button>BUY TICKET</button>
      </div>
    </div>
  );
}

export default DayListPage;
