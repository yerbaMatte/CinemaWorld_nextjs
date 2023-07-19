import React, { Suspense } from 'react';
import { basicFetch } from '@/api/fetchFunctions';
import { movieUrl, creditsUrl } from '@/config';
import { Credits, Movie } from '@/types/Movie';
import { MovieDetails, CastGrid, GoBackButton } from './components';

export default async function Page({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movieEndpoint: string = movieUrl(movieId);
  const movieData: Movie = await basicFetch(movieEndpoint);
  console.log(movieData);

  const castEndpoint: string = creditsUrl(movieId);
  const creditPromise: Promise<Credits> = basicFetch(castEndpoint);

  return (
    <>
      <MovieDetails movie={movieData} cast={creditPromise} />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <CastGrid promise={creditPromise} />
      </Suspense>
      <GoBackButton />
    </>
  );
}
