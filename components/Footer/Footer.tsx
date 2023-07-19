import React from 'react';
import Image from 'next/image';
import { RiGithubFill } from 'react-icons/ri';
import tmdb from '../../public/images/tmdb.svg';

function Footer() {
  return (
    <div className='flex justify-between items-center text-theme-500 font-bold m-6 mb-3 bg-brand-900'>
      <a
        className='flex font-semibold'
        href='https://github.com/yerbaMatte'
        target='_blank'
        rel='noreferrer'
      >
        <RiGithubFill className='inline w-6 h-6' />
        <span className='text-sm pl-1'>yerbaMatte</span>
      </a>
      <a href='https://www.themoviedb.org/' target='_blank' rel='noreferrer'>
        <Image height={12} src={tmdb} alt='TMDB Logo' />
      </a>
    </div>
  );
}

export default Footer;
