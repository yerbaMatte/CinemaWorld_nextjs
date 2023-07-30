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
    <div className="w-full flex flex-col justify-center items-center mt-32">
      <div className="background-movie-card rounded-3xl px-64 py-12">
        <h2 className="text-3xl text-white p-3">
          ❌ 404 Not found - Something went wrong!
        </h2>
        <p className="text-2xl text-white text-center">Choose the right day!</p>
        <Link href={`/nowplaying/${currentDayName}`}>
          <div className="text-xl text-white cursor-pointer border p-6 m-8 text-center rounded-2xl hover:bg-theme-700 hover:text-black duration-1000">
            Go to the current day
          </div>
        </Link>
      </div>
    </div>
  );
}
