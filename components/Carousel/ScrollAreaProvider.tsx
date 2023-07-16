import { useRef } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const ScrollAreaProvider = ({ children }: { children: JSX.Element }) => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (amount: number) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const { scrollLeft } = scrollArea;
      scrollArea.scrollTo({
        left: scrollLeft + amount, // Adjust the scroll amount as needed
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
