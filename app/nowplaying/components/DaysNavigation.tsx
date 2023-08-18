'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { navigationDays } from '@/utils/helpers';
import { useRouter } from 'next/navigation';

function DaysNavigation() {
  const { fullDayNames } = navigationDays();

  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const router = useRouter();

  useEffect(() => {
    setSelectedDay(currentDay);
  }, [currentDay]);

  console.log(selectedDay);

  const handleDayClick = (dayIndex: number) => {
    setSelectedDay(dayIndex);
    router.push('/');
  };

  return (
    <div className='text-sm font-medium text-center text-gray-500 border-t border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
      <ul className='flex-wrap -mb-px hidden md:flex'>
        <li className='mr-2 dayListItem cursor-pointer'>
          {/* <Link
            href='/nowplaying/mon'
            className={`dayListItem ${selectedDay === 1 && 'active'}`}
            onClick={() => handleDayClick(1)}
          > */}
          Monday
          {/* </Link> */}
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/tue'
            className={`dayListItem ${selectedDay === 2 && 'active'}`}
            onClick={() => handleDayClick(2)}
          >
            Tuesday
          </Link>
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/wed'
            className={`dayListItem ${selectedDay === 3 && 'active'}`}
            onClick={() => handleDayClick(3)}
          >
            Wednesday
          </Link>
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/thu'
            className={`dayListItem ${selectedDay === 4 && 'active'}`}
            onClick={() => handleDayClick(4)}
          >
            Thursday
          </Link>
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/fri'
            className={`dayListItem ${selectedDay === 5 && 'active'}`}
            onClick={() => handleDayClick(5)}
          >
            Friday
          </Link>
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/sat'
            className={`dayListItem ${selectedDay === 6 && 'active'}`}
            onClick={() => handleDayClick(6)}
          >
            Saturday
          </Link>
        </li>
        <li className='mr-2'>
          <Link
            href='/nowplaying/sun'
            className={`dayListItem ${selectedDay === 0 && 'active'}`}
            onClick={() => handleDayClick(7)}
          >
            Sunday
          </Link>
        </li>
      </ul>
      {/* MOBILE DAYS SELECTION */}
      <div className='md:hidden'>
        <select
          id='days'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white p-2'
        >
          {fullDayNames.map((day, index) => (
            <option key={index} value={index}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DaysNavigation;
