import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';
import Link from 'next/link';

type PlayingMovies = {
  id: number;
  posterPath: string | number;
  genres: { name: string; id: number }[];
  title: string | number;
  synopsis: string | number;
  duration: number;
  rating: number;
  start: string | number;
};

function MovieCard({ details }: { details: PlayingMovies }) {
  const { title, genres, duration, synopsis, start, posterPath, rating, id } =
    details;
  return (
    <div className="flex border rounded-lg border-theme-900 background-movie-card my-3 p-4 relative animate-fadeIn">
      <div className="flex relative w-44 mx-4">
        <Image
          width={342}
          height={513}
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
          src={IMAGE_BASE_URL + THUMB_SIZE + posterPath}
          alt="movie"
          priority={true}
          className="rounded-md cursor-pointer border border-theme-600"
        />
      </div>
      <div className="flex flex-col justify-between text-white w-full grow">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl mt-2">{title}</h2>
            <div className="text-white text-3xl font-bold uppercas p-4">
              ✪ {!rating ? '0/10' : `${rating.toFixed(2)}`}
            </div>
          </div>

          <div>
            {genres.map((genre: { name: string; id: number }) => (
              <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {genre.name}
              </span>
            ))}
            <span className="text-sm">{duration} min</span>
          </div>
        </div>
        <p className="py-4 mr-32">{synopsis}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg border rounded text-theme-400 border-theme-300 p-3 hover:neon-shadow duration-500 cursor-pointer">
            {start}
          </span>
          <Link
            href={`/movies/${id}`}
            className="text-theme-600 underline hover:text-white p-4"
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
