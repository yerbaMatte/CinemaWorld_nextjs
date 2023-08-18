'use client';

import Link from 'next/link';
import { navigationDays } from '@/utils/helpers';
import { useContext, useState } from 'react';
import { AppContext } from '@/context/statusContext';
import { signOut } from '@/firebase/auth';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { currentDayName } = navigationDays();
  const { state, dispatch } = useContext(AppContext);
  const userEmail = state?.email;
  const isLoading = state?.isLoading;

  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = () => {
    setIsModalOpened((prev) => !prev);
    document.body.style.overflow = isModalOpened ? 'auto' : 'hidden';
  };

  const signOutHandler = () => {
    dispatch({
      type: 'SET-USER',
      payload: {
        email: null,
      },
    });
    signOut();
    router.push('/');
    console.log(userEmail, isLoading);
  };

  return (
    <>
      <header className='sticky top-0 z-30 w-full p-3 sm:px-4 bg-theme-900 bg-opacity-60 '>
        <div className='flex items-center justify-between mx-auto'>
          <Link href='/'>
            <div className='flex text-2xl font-bold text-theme-300 font-serif items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-12 h-12 pr-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5'
                />
              </svg>
              <div className='bg-gradient-to-t from-theme-500 to-theme-700 inline-block text-transparent bg-clip-text'>
                CinemaWorld
              </div>
            </div>
          </Link>
          {!isLoading && (
            <div className='flex items-center space-x-1'>
              <ul className='hidden space-x-2 md:inline-flex'>
                <li>
                  <Link
                    href='/'
                    className='px-3 py-2 font-semibold text-theme-600 rounded hover:text-theme-300 hover:underline'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className='px-3 py-2 font-semibold text-theme-600 rounded hover:text-theme-300 hover:underline'
                    href={`/nowplaying/${currentDayName}`}
                  >
                    Now playing
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='px-3 py-2 font-semibold text-theme-600 rounded hover:text-theme-300 hover:underline'
                  >
                    About
                  </Link>
                </li>
                <li>
                  {userEmail && (
                    <Link
                      className='font-semibold text-theme-600 border rounded border-theme-300 py-1 px-3 hover:neon-shadow duration-1000'
                      href='/myaccount'
                    >
                      My Account
                    </Link>
                  )}
                </li>
                <li>
                  {userEmail ? (
                    <Link
                      className='font-semibold border border-theme-300 py-1 px-3 hover:neon-shadow duration-1000 rounded bg-theme-400 text-black'
                      href='/'
                      onClick={signOutHandler}
                    >
                      Log out
                    </Link>
                  ) : (
                    <Link
                      className='font-semibold text-theme-600 border rounded border-theme-300 py-2 px-5 hover:neon-shadow duration-1000'
                      href='/auth/signin'
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
              <div className='inline-flex md:hidden'>
                <button className='flex-none px-2' onClick={openModalHandler}>
                  {!isModalOpened && (
                    <>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='white'
                        className='w-8 h-8'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {isModalOpened && (
        <div
          className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-theme-900 bg-opacity-90 border-t-2 border-white fade-in`}
        >
          <div className='flex flex-col h-full justify-center text-white'>
            <ul className='text-center space-y-6 text-2xl'>
              <li>
                <Link
                  href='/'
                  className=' hover:underline'
                  onClick={openModalHandler}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='hover:underline'
                  href={`/nowplaying/${currentDayName}`}
                  onClick={openModalHandler}
                >
                  Now playing
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:underline'
                  onClick={openModalHandler}
                >
                  About
                </Link>
              </li>
              <li>
                {userEmail && (
                  <Link
                    className='border rounded border-white py-1 px-3 hover:neon-shadow duration-1000'
                    href='/myaccount'
                    onClick={openModalHandler}
                  >
                    My Account
                  </Link>
                )}
              </li>
              <li>
                {userEmail ? (
                  <Link
                    className='border border-white py-1 px-3 hover:neon-shadow duration-1000 rounded bg-theme-400 text-black'
                    href='/'
                    onClick={(e) => {
                      signOutHandler();
                      openModalHandler();
                      e.preventDefault();
                    }}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    className='font-semibold border rounded border-white py-2 px-5 hover:neon-shadow duration-1000'
                    href='/auth/signin'
                    onClick={openModalHandler}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
            <button
              className='absolute top-0 right-0 m-4'
              onClick={openModalHandler}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='white'
                className='w-8 h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
