import React from 'react';
import Image from 'next/legacy/image';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';

function MovieCard({ details }) {
  const { title, genres, duration, synopsis, start, posterPath } = details;
  return (
    <div className="flex border rounded-lg border-theme-900 background-opacity mt-2 py-4 relative">
      <div className="flex relative w-44 mx-8">
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
          <h2 className="text-3xl pt-2">{title}</h2>
          {/* <div>
            {genres.map((genre: string) => (
              <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {genre}
              </span>
            ))}
            <span className="text-sm">{duration} min</span>
          </div> */}
        </div>
        <p className="py-4">{synopsis}</p>
        <div className="mb-8">
          <span className="text-sm border rounded text-theme-400 border-theme-300 p-2 mr-3 hover:neon-shadow duration-500 cursor-pointer">
            {start}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
