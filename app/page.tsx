import React from 'react';
import { basicFetch } from '../api/fetchFunctions';
import { Featured, Movie, SelectMovie } from '../types/Movie';
import {
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  movieUrl,
  NOW_PLAYING_MOVIE_IDS,
} from '../config';
import { Hero, Carousel } from '../components';

export default async function Home() {
  const featuredMovie: Featured = await getFeaturedMovie();
  const playingMovies: SelectMovie[] = await nowPlayingMovies();

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
      <div className="relative pt-10 bg-brand-900 z-30">
        <Carousel data={playingMovies} />
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
  // Now playing movies
  const fetchPromises = NOW_PLAYING_MOVIE_IDS.map((movie) =>
    basicFetch<Movie>(movieUrl(movie))
  );
  const result = await Promise.all(fetchPromises);

  const playingMovies = result.map((movie) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    backdropPath: movie.backdrop_path,
    title: movie.title,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    synopsis: movie.overview,
    genres: movie.genres,
  }));

  return playingMovies;
};
