'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { navigationDays } from '@/utils/helpers';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { currentDayName } = navigationDays();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='bg-black-shadow rounded-3xl w-full flex flex-col justify-center items-center mt-32 py-32 sm:py-16'>
      <h2 className='text-2xl sm:text-3xl text-white p-3 w-full sm:w-4/6 text-center'>
        ❌ 404 Not found - Something went wrong!
      </h2>
      <p className='text-sm sm:text-xl text-white text-center'>
        Choose the right day!
      </p>
      <Link href={`/nowplaying/${currentDayName}`}>
        <div className='text-md sm:text-xl text-white cursor-pointer border p-3 m-4 text-center rounded-2xl hover:bg-theme-700 hover:text-black duration-1000'>
          Go to the current day
        </div>
      </Link>
    </div>
  );
}
