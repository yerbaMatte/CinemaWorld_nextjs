import Image from 'next/legacy/image';
import Link from 'next/link';
import { truncateString } from '@/utils/helpers';
import { RiStarFill } from 'react-icons/ri';

type Props = {
  imgUrl: string;
  title: string;
  text: string;
  tagline: string;
  releaseDate: string;
  id: number;
  rating: number;
};

const Hero = ({
  imgUrl,
  title,
  text,
  tagline,
  releaseDate,
  id,
  rating,
}: Props) => {
  return (
    <div className="relative">
      <Image
        priority={true}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={imgUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover -z-10 animate-fadeIn"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
      />

      <div className="absolute w-full h-full bg-gradient-to-t from-[#010404] via-transparent to-transparent" />
      <div className="absolute w-full h-full bg-gradient-to-b from-[#010404] via-transparent to-transparent" />
      <div className="absolute overflow-hidden inset-0 m-0 p-0 w-full h-full bg-gradient-to-r from-[#010404] via-transparent to-transparent" />
      <div className="relative">
        <div className="px-4 pt-120 pb-56 mx-auto md:px-6 lg:px-8">
          <div className="flex items-center justify-between md:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <span className="text-2xl md:text-3xl xl:text-5xl italic text-shadow-md text-white my-1 block font-thin">
                &quot;{tagline}&quot;
              </span>
              <h1 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-bold text-theme-400 text-shadow-md">
                {title}
              </h1>
              <p className="text-gray-400 mt-2 text-sm">
                Released | {releaseDate}
              </p>
              <div className="my-4 flex items-center gap-4">
                <div className="flex items-center gap-2 border font-bold rounded bg-theme-400 text-black border-theme-300 py-2 px-5">
                  <RiStarFill />
                  {rating.toFixed(2)}
                </div>
                <Link href={`/movies/${id}`}>
                  <button className="border rounded text-theme-400 border-theme-300 py-2 px-5 hover:neon-shadow duration-500">
                    See Details
                  </button>
                </Link>
              </div>
              <p className="w-full text-gray-200 text-shadow-lg">
                {truncateString(text, 131)}{' '}
                <Link
                  href={`/movies/${id}`}
                  className="text-theme-600 underline hover:text-white"
                >
                  read more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
