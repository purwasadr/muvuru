import CardShow2 from '@/components/ui/CardShow2';
import ImageButton from '@/components/ui/ImageButton';
import { Movie } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Carousel from 'react-multi-carousel';

interface Props {
  upcomingMovies?: Movie[];
}

export const UpcomingSection = ({ upcomingMovies }: Props) => {
  const carouselResponsive = {
    main: {
      breakpoint: { min: 0, max: 1000 },
      items: 1,
    },
    md: {
      breakpoint: { min: 1000, max: 1536 },
      items: 2,
    },
    // xxl: {
    //   breakpoint: { min: 1536, max: 4000 },
    //   items: 3,
    // }
  };

  const carouselRef = useRef<Carousel>(null);

  return (
    <section>
      <h2 className='text-center'>Upcoming</h2>
      <div className='mt-12 flex justify-end space-x-2'>
        <ImageButton onClick={(e) => carouselRef.current?.previous(2)}>
          <ChevronLeft className='h-5 w-5' />
        </ImageButton>
        <ImageButton onClick={(e) => carouselRef.current?.next(2)}>
          <ChevronRight className='h-5 w-5' />
        </ImageButton>
      </div>
      <Carousel
        className='mt-4 w-full'
        responsive={carouselResponsive}
        itemClass={'carousel-item-center'}
        arrows={false}
        autoPlay
        rewind={true}
        autoPlaySpeed={5000}
        ref={carouselRef}
      >
        {upcomingMovies?.map((movie) => (
          <CardShow2 key={movie.id} show={movie} mediaType={'movie'} />
        ))}
      </Carousel>
    </section>
  );
};
