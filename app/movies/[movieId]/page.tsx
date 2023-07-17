import React from 'react';
import MovieDetails from './components/MovieDetails';
import CastGrid from './components/CastGrid';
import { basicFetch } from '@/api/fetchFunctions';
import { movieUrl, creditsUrl } from '@/config';
import { Credits } from '@/types/Movie';
import { Suspense } from 'react';

export default async function Page({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movieEndpoint: string = movieUrl(movieId);
  const movieData = await basicFetch(movieEndpoint);

  const castEndpoint: string = creditsUrl(movieId);
  const creditPromise: Promise<Credits> = basicFetch(castEndpoint);

  return (
    <>
      <MovieDetails movie={movieData} cast={creditPromise} />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <CastGrid promise={creditPromise} />
      </Suspense>
    </>
  );
}
