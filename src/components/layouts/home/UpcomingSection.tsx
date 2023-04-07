import CardShow2 from '@/components/ui/CardShow2';
import { Movie } from '@/types';
import Carousel from 'react-multi-carousel';

interface Props {
  upcomingMovies?: Movie[]
}

export const UpcomingSection = ({upcomingMovies}: Props) => {
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

  return (
    <section>
      <h2 className="text-center">Upcoming</h2>
      <Carousel
        className="mt-12 w-full"
        responsive={carouselResponsive}
        itemClass={'carousel-item-center'}
        arrows={false}
        autoPlay
        rewind={true}
        autoPlaySpeed={5000}
      >
        {upcomingMovies?.map((movie) => <CardShow2 key={movie.id} show={movie} mediaType={'movie'} /> )}
        </Carousel>
    </section>
  );
}
