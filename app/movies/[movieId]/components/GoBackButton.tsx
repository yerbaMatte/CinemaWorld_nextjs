import Link from 'next/link';
import React from 'react';

function GoBackButton() {
  return (
    <Link href='/' className='animate-fadeIn'>
      <div className='fixed top-0 left-0 bg-theme-600 pr-6 pb-2 rounded-br-3xl opacity-50 hover:opacity-90 duration-500'>
        <div className='flex pl-1 pt-1 text-black font-semibold justify-center items-center'>
          <span className='font-medium p-2'>MAIN PAGE</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default GoBackButton;
