import Link from 'next/link';
import React from 'react';

function GoBackButton() {
  return (
    <Link href='/' className='animate-fadeIn'>
      <div className='fixed bottom-1/2 left-0 translate-y-1/2 bg-theme-600 rounded-tr-3xl rounded-br-3xl opacity-50 hover:opacity-90 duration-500'>
        <div className='flex py-16 text-black font-semibold justify-center items-center'>
          {/* <span className='font-medium p-2'>MAIN PAGE</span> */}
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
