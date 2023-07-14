import React from 'react';
import Image from 'next/image';
import { basicFetch } from '../api/fetchFunctions';
import {
  Featured,
  Movie,
  SelectMovie,
  GenreResponse,
  Movies,
} from '../types/Movie';
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  movieUrl,
  genreUrl,
  NOW_PLAYING_MOVIE_IDS,
} from '../config';
import { Hero, Carousel, CarouselCard } from '../components';
import { useModal } from '../utils/useModal';

type HomeProps = {
  featuredMovie: Featured;
};

const CarouselProps = {
  maxVisibleSlides: 7,
  infiniteLoop: false,
};

export default async function Home() {
  // const { handleToggle, isVisible, setIsVisible, activeMovie } = useModal();
  const featuredMovie: Featured = await getFeaturedMovie();
  const playingMovies = await nowPlayingMovies();
  console.log(playingMovies);

  return (
    <>
      <Hero
        imgUrl={
          featuredMovie.backdropPath
            ? IMAGE_BASE_URL + BACKDROP_SIZE + featuredMovie.backdropPath
            : '/images/baby-yoda-32.png'
        }
        title={featuredMovie.title}
        text={featuredMovie.overview}
        tagline={featuredMovie.tagline}
        releaseDate={featuredMovie.releaseDate}
        id={featuredMovie.id}
        rating={featuredMovie.rating}
      />
      <div className='relative pt-10 bg-brand-900 z-30'>
        {/* <Carousel
          {...CarouselProps}
          title='Action Movies'
          href='/movies/genre/28'
          hasLink={true}
        >
          {playingMovies.map((playingMovie) => (
            <CarouselCard
              key={playingMovie.id}
              movie={playingMovie}
              onClick={() => handleToggle(playingMovie)}
            />
          ))}
        </Carousel> */}
      </div>
    </>
  );
}

export const getFeaturedMovie = async () => {
  // Featured Movie
  const movieEndpoint: string = movieUrl('98');
  const movieResp = await basicFetch<Movie>(movieEndpoint);

  const featuredMovie = {
    id: movieResp.id,
    backdropPath: movieResp.backdrop_path,
    title: movieResp.title,
    overview: movieResp.overview,
    tagline: movieResp.tagline,
    releaseDate: movieResp.release_date,
    rating: movieResp.vote_average,
  };
  return featuredMovie;
};

export const nowPlayingMovies = async () => {
  // Playing movies
  const fetchPromises = NOW_PLAYING_MOVIE_IDS.map((movie) =>
    basicFetch<Movie>(movieUrl(movie))
  );
  const result = await Promise.all(fetchPromises);

  const playingMovies = result.map((movie) => ({
    id: movie.id,
    backdropPath: movie.backdrop_path,
    posterPath: movie.poster_path,
    title: movie.title,
    overview: movie.overview,
    tagline: movie.tagline,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
  }));

  return playingMovies;
};
