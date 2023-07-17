import Image from 'next/legacy/image';
import Link from 'next/link';
import { IMAGE_BASE_URL, THUMB_SIZE } from '@/config';
import { truncateString } from '@/utils/helpers';
import { SelectMovie } from '@/types/Movie';

export const MovieCard = ({ movie }: { movie: SelectMovie }) => {
  return (
    <Link href=''>
      <div
        key={movie.id}
        className='flex flex-col items-center justify-center animate-fadeIn movie hover:hover-movie duration-1000 2xl:w-64 xl:w-60 lg:w-52 md:w-44 sm:w-32 w-32'
      >
        <Image
          placeholder='blur'
          blurDataURL='/images/placeholder.png'
          width={342}
          height={513}
          src={IMAGE_BASE_URL + THUMB_SIZE + movie.posterPath}
          alt='movie'
          priority={true}
          className='rounded-md bg-theme-900 cursor-pointer'
        />
        <div className='text-theme-300 text-lg py-2 uppercase text-center'>
          {truncateString(movie.title, 24)}
        </div>
      </div>
    </Link>
  );
};
