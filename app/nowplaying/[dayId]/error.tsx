'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='w-full flex flex-col '>
      <div className='h-full '>
        <h2 className='text-white'>Something went wrong!</h2>
        <p className='text-white'>Choose the right day</p>
      </div>
    </div>
  );
}
