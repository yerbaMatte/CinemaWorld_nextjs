import React from 'react';
import MovieCard from '../components/MovieCard';
import { navigationDays } from '@/utils/helpers';
import { moviesSchedule } from '@/api/moviesSchedule';
import { basicFetch } from '@/api/fetchFunctions';
import { PlayingMovie } from '@/types/Movie';
import { movieUrl } from '@/config';

async function DayListPage({
  params: { dayId },
}: {
  params: { dayId: string };
}) {
  const { mapOfDays } = navigationDays();

  if (![...mapOfDays.values()].includes(dayId)) {
    throw new Error('There is no such a resource to display');
  }

  const playingMovies = await dayPlayingMovies(dayId);

  return (
    <>
      {playingMovies.map((movie) => (
        <MovieCard details={movie} key={movie.id} />
      ))}
    </>
  );
}

export default DayListPage;

export const dayPlayingMovies = async (dayId: string) => {
  // get a list of playing movies at specific day
  const listOfMovies = moviesSchedule[dayId];
  // fetch movies
  const fetchPromises = Object.keys(listOfMovies).map((movie) =>
    basicFetch<PlayingMovie>(movieUrl(movie))
  );
  const result = await Promise.all(fetchPromises);

  const playingMovies = result.map((movie) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    genres: movie.genres,
    title: movie.title,
    synopsis: movie.overview,
    duration: movie.runtime,
    rating: movie.vote_average,
    start: listOfMovies[movie.id]['start'],
  }));

  return playingMovies;
};
