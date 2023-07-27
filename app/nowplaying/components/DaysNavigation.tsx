'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';

function DaysNavigation() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const [selectedDay, setSelectedDay] = useState(0);

  // useEffect(() => {
  //   setSelectedDay(currentDay);
  // }, []);

  return (
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
  );
}

export default DaysNavigation;
