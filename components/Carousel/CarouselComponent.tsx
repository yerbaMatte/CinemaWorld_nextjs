'use client';

import React from 'react';
import Carousel from './Carousel';
import CarouselCard from './CarouselCard';
import { useModal } from '../../utils/useModal';
import { SelectMovie } from '../../types/Movie';

const CarouselProps = {
  maxVisibleSlides: 7,
  infiniteLoop: false,
};

function CarouselComponent({ data }: { data: SelectMovie[] }) {
  const { handleToggle, isVisible, setIsVisible, activeMovie } = useModal();

  return (
    <Carousel {...CarouselProps} href="" hasLink={true}>
      {data.map((playingMovie) => (
        <CarouselCard
          key={playingMovie.id}
          movie={playingMovie}
          onClick={() => handleToggle(playingMovie)}
        />
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
