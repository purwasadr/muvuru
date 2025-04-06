import Button from '@/components/ui/Button';
import ScoreShow from '@/components/ui/ScoreShow';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Movie } from '@/types';
import { getMovieGenreFromIds } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

interface Props {
  popularMovies?: Movie[];
}

const HeroSection = ({ popularMovies }: Props) => {
  return (
    <section className='w-full max-w-screen-2xl'>
      <Swiper slidesPerView={1} modules={[Pagination]}>
        {popularMovies?.slice(0, 5).map((movie) => (
          <SwiperSlide key={movie.id}>
            <article className='relative flex h-[452px] w-full flex-col items-center justify-end md:h-[600px]'>
              {movie.backdrop_path ? (
                <Image
                  className='absolute z-0 object-cover brightness-[.8]'
                  src={`${MOVIEDB_IMAGE_URL}/t/p/w1280${movie.backdrop_path}`}
                  fill
                  alt={movie.title ?? ''}
                />
              ) : (
                <div className='absolute inset-0 z-0 flex items-center justify-center bg-slate-400'>
                  {/* Image off SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[50%] w-[50%]"
                  >
                    <line x1="2" y1="2" x2="22" y2="22" />
                    <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
                    <line x1="13.5" y1="13.5" x2="6" y2="21" />
                    <path d="M14 3h6a2 2 0 0 1 2 2v6" />
                    <path d="M9.59 5.99A2 2 0 0 1 12 5h8a2 2 0 0 1 2 2v8a2 2 0 0 1-.59 1.41" />
                    <path d="M4 20H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h2" />
                  </svg>
                </div>
              )}
              <div className='page-padding-x relative z-20 mb-10 flex w-full flex-col items-center justify-end'>
                <h1 className='text-center'>
                  {movie.title +
                    ' (' +
                    new Date(movie.release_date ?? '').getFullYear() +
                    ')'}
                </h1>
                <p className='mt-3 text-center text-gray-300'>
                  {getMovieGenreFromIds(movie.genre_ids)}
                </p>
                <div className='mt-3 flex items-center space-x-4'>
                  <div className='flex items-center space-x-3'>
                    <ScoreShow
                      radius={25}
                      stroke={3}
                      fontSize={'base'}
                      score={movie.vote_average ?? 0}
                    />
                    <div className='flex flex-col -space-y-1 max-[300px]:hidden'>
                      <p className='text-lg'>
                        {movie.vote_count}
                      </p>
                      <p className='text-sm text-secondary'>reviews</p>
                    </div>
                  </div>
                  <div className='h-7 w-[1.5px] rounded-full bg-slate-600'></div>
                  <Link href={`/movie/${movie.id}`}>
                    <Button>See Details</Button>
                  </Link>
                </div>
              </div>
              <div className='absolute inset-x-0 bottom-0 z-10 h-[300px] bg-gradient-to-t from-slate-800 to-transparent' />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
