'use client';

import { useState, useRef } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';
import { truncateString } from '@/utils/helpers';
import { SelectMovie } from '@/types/Movie';

const ScrollAreaDemo = ({ children }: { children: JSX.Element }) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const { scrollLeft } = scrollArea;
      scrollArea.scrollTo({
        left: scrollLeft - 200, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
      setScrollLeft(scrollLeft - 200);
    }
  };

  const handleScrollRight = () => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const { scrollLeft } = scrollArea;
      scrollArea.scrollTo({
        left: scrollLeft + 200, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
      setScrollLeft(scrollLeft + 200);
    }
  };

  return (
    <ScrollArea.Root className='ScrollAreaRoot'>
      <ScrollArea.Viewport
        className='ScrollAreaViewport pb-5 pl-5 pt-5'
        ref={scrollAreaRef}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className='ScrollAreaScrollbar'
        orientation='vertical'
      >
        <ScrollArea.Thumb className='ScrollAreaThumb' />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className='ScrollAreaScrollbar'
        orientation='horizontal'
      >
        <ScrollArea.Thumb className='ScrollAreaThumb' />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className='ScrollAreaCorner' />
      <button
        className='scroll-button left-0 rounded-tr-lg rounded-br-lg'
        onClick={handleScrollLeft}
      >
        &lt;
      </button>
      <button
        className='scroll-button right-0 rounded-tl-lg rounded-bl-lg'
        onClick={handleScrollRight}
      >
        &gt;
      </button>
    </ScrollArea.Root>
  );
};

const MovieCard = ({ movie }: { movie: SelectMovie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div
        key={movie.id}
        className='flex flex-col items-center justify-center animate-fadeIn movie hover:hover-movie duration-1000 2xl:w-64 xl:w-60 lg:w-52 md:w-44 sm:w-32 w-32'
      >
        <Image
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          width={342}
          height={513}
          src={IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath}
          alt='movie'
          priority={true}
          className='rounded-md bg-theme-900 cursor-pointer'
        />
        <div className='text-theme-300 text-sm py-2 uppercase text-center'>
          {truncateString(movie.title, 24)}
        </div>
      </div>
    </Link>
  );
};

function Carousel({ movies }: { movies: SelectMovie[] }) {
  return (
    <div className='relative pt-10 bg-brand-900 z-30'>
      <h2 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md pl-5'>
        NOW WE ARE PLAYING
      </h2>
      <ScrollAreaDemo>
        <div className='flex gap-x-5 relative'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </ScrollAreaDemo>
    </div>
  );
}

export default Carousel;
