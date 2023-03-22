import Button from '@/components/ui/Button';
import ScoreShow from '@/components/ui/ScoreShow';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Movie } from '@/types';
import { getMovieGenreFromIds } from '@/utils';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

interface Props {
  popularMovies?: Movie[];
}

const HeroSection = ({ popularMovies }: Props) => {
  const carouselResponsive = {
    main: {
      breakpoint: { min: 0, max: 4000 },
      items: 1,
    },
  };

  return (
    <section className="w-full max-w-screen-2xl">
      <Carousel
        className="w-full"
        responsive={carouselResponsive}
        itemClass={'carousel-item-center'}
        arrows={false}
        autoPlay
        rewind={true}
        autoPlaySpeed={5000}
      >
        {popularMovies?.slice(0, 5).map((movie) => (
          <article
            className="relative h-[450px] md:h-[600px] w-full flex flex-col justify-end items-center"
            key={movie.id}
          >
            <Image
              className="brightness-[.8] absolute z-0 object-cover"
              src={`${MOVIEDB_IMAGE_URL}/t/p/w1280${movie.backdrop_path}`}
              fill
              alt={movie.title ?? ''}
            />
            <div className="relative flex flex-col justify-end items-center z-20 mb-10 w-full page-padding-x">
              <h1 className="text-center">
                {movie.title +
                  ' (' +
                  new Date(movie.release_date ?? '').getFullYear() +
                  ')'}
              </h1>
              <div className="flex space-x-3 mt-3 items-center">
                <ScoreShow score={movie.vote_average ?? 0} />
                <div className="h-5 w-[1.5px] rounded-full bg-gray-400"></div>
                <p className="text-center text-gray-300">1h 30m</p>
              </div>
              <p className="text-gray-300 mt-2 text-center">
                {getMovieGenreFromIds(movie.genre_ids)}
              </p>
              <Button className="mt-4">See Details</Button>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 h-[300px] bg-gradient-to-t from-slate-800 to-transparent" />
          </article>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
