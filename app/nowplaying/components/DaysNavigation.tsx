'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { navigationDays } from '@/utils/helpers';
import { useRouter } from 'next/navigation';

function DaysNavigation() {
  const { fullDayNames, dayIndicies } = navigationDays();

  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const router = useRouter();

  useEffect(() => {
    setSelectedDay(currentDay);
  }, [currentDay]);

  console.log(selectedDay);

  const handleDayDesktop = (dayIndex: number) => {
    setSelectedDay(dayIndex);
    router.push(`/nowplaying/${dayIndicies[dayIndex]}`);
  };

  const handleDayMobile = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedDay(selectedValue);
    router.push(`/nowplaying/${dayIndicies[selectedValue]}`);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-t border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      {/* DESKTOP DAYS NAVIGATION */}
      <ul className="flex-wrap -mb-px hidden md:flex">
        {fullDayNames.map((day, index) => (
          <li
            key={index}
            value={index}
            className={`mr-2 dayListItem cursor-pointer ${
              selectedDay === index && 'active'
            }`}
            onClick={() => handleDayDesktop(index)}
          >
            {day}
          </li>
        ))}
      </ul>
      {/* MOBILE DAYS SELECTION */}
      <div className="md:hidden">
        <select
          id="days"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white p-2"
          value={selectedDay}
          onChange={handleDayMobile}
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
