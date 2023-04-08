import Button from '@/components/ui/Button';
import CardShow from '@/components/ui/CardShow';
import CarouselBtnLeft from '@/components/ui/CarouselBtnLeft';
import CarouselBtnRight from '@/components/ui/CarouselBtnRight';
import ImageButton from '@/components/ui/ImageButton';
import { Movie, Show, Tv } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Carousel from 'react-multi-carousel';

interface Props {
  trending?: Show[];
}

const TopMoviesSection = ({ trending }: Props) => {
  const carouselResponsive = {
    // xxl: {
    //   breakpoint: { min: 1536, max: 4000 },
    //   items: 7,
    // },
    // xl: {
    //   breakpoint: { min: 1280, max: 1536 },
    //   items: 6,
    //   partialVisibilityGutter: -10
    // },
    // lg: {
    //   breakpoint: { min: 1024, max: 1280 },
    //   items: 5,
    //   partialVisibilityGutter: -20
    // },
    // md: {
    //   breakpoint: { min: 768, max: 1023 },
    //   items: 4,
    //   partialVisibilityGutter: -20
    // },
    // sm: {
    //   breakpoint: { min: 640, max: 768 },
    //   items: 3,
    // },
    // xs: {
    //   breakpoint: { min: 590, max: 640 },
    //   items: 3,
    //   partialVisibilityGutter: -30
    // },
    // xxs: {
    //   breakpoint: { min: 0, max: 590 },
    //   items: 3,
    //   partialVisibilityGutter: -50
    // },
    // xxxs: {
    //   breakpoint: { min: 0, max: 470 },
    //   items: 2,
    //   partialVisibilityGutter: -30
    // },
    // xxxxs: {
    //   breakpoint: { min: 0, max: 414 },
    //   items: 2,
    //   partialVisibilityGutter: -60
    // },
    main: {
      breakpoint: { min: 769, max: 4000 },
      items: 7,
      partialVisibilityGutter: 20,
    },
    md: {
      breakpoint: { min: 0, max: 768 },
      items: 8,
      partialVisibilityGutter: 25,
    },
  };

  const carouselRef = useRef<Carousel>(null);

  return (
    <section className="relative z-30">
      <h2 className="text-center">Trending</h2>
      <div className="flex space-x-2 justify-end mt-12">
        <ImageButton onClick={(e) => carouselRef.current?.previous(2)}>
          <ChevronLeft className="h-5 w-5" />
        </ImageButton>
        <ImageButton onClick={(e) => carouselRef.current?.next(2)}>
          <ChevronRight className="h-5 w-5" />
        </ImageButton>
      </div>
      {trending ? (
        <div className="overflow-hidden">
          <Carousel
            className="mt-4"
            responsive={carouselResponsive}
            customLeftArrow={<CarouselBtnLeft />}
            customRightArrow={<CarouselBtnRight />}
            itemClass={'carousel-item-center'}
            containerClass={'carousel-container'}
            ref={carouselRef}
            arrows={false}
            autoPlay
            // rewindWithAnimation
            // rewind
            partialVisible
            infinite
          >
            {trending?.map((show) => <CardShow key={show.id} show={show} />) ||
              []}
          </Carousel>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[150px]">
          <p>Cannot fetch data</p>
        </div>
      )}
    </section>
  );
};

export default TopMoviesSection;
