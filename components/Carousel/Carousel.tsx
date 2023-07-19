'use client';

import { useRef } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { MovieCard } from './MovieCard';
import { SelectMovie } from '@/types/Movie';

const ScrollAreaProvider = ({ children }: { children: JSX.Element }) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (amount: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const { scrollLeft } = scrollArea;
      scrollArea.scrollTo({
        left: scrollLeft + amount,
        behavior: 'smooth',
      });
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
        onClick={() => handleScroll(-200)}
      >
        &lt;
      </button>
      <button
        className='scroll-button right-0 rounded-tl-lg rounded-bl-lg'
        onClick={() => handleScroll(200)}
      >
        &gt;
      </button>
    </ScrollArea.Root>
  );
};

function Carousel({ movies }: { movies: SelectMovie[] }) {
  return (
    <div className='relative pt-10 bg-brand-900 z-30'>
      <h2 className='md:text-xl lg:text-2xl font-semibold text-theme-400 text-shadow-md pl-5'>
        NOW WE ARE PLAYING
      </h2>
      <ScrollAreaProvider>
        <div className='flex gap-x-5 relative'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </ScrollAreaProvider>
    </div>
  );
}

export default Carousel;
