import CardShow from '@/components/ui/CardShow';
import ImageButton from '@/components/ui/ImageButton';
import { Show } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Swiper as SwiperOri } from 'swiper';

interface Props {
  trending?: Show[];
}

const TopMoviesSection = ({ trending }: Props) => {
  const [swiper, setSwiper] = useState<SwiperOri>();

  return (
    <section className='relative z-30'>
      <h2 className='text-center'>Trending</h2>
      <div className='mt-12 flex justify-end space-x-2'>
        <ImageButton onClick={() => swiper?.slidePrev()}>
          <ChevronLeft className='h-5 w-5' />
        </ImageButton>
        <ImageButton onClick={() => swiper?.slideNext()}>
          <ChevronRight className='h-5 w-5' />
        </ImageButton>
      </div>
      {trending ? (
        <div className='overflow-hidden'>
          <Swiper
            className='mt-4'
            slidesPerView={'auto'}
            onSwiper={(swiper) => setSwiper(swiper)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 0: { spaceBetween: 12 }, 768: { spaceBetween: 24 } }}
            modules={[Autoplay]}
          >
            {trending?.map((show) => (
              <SwiperSlide className='!w-[150px] md:!w-[180px]' key={show.id}>
                <CardShow fullWidth show={show} />
              </SwiperSlide>
            )) || []}
          </Swiper>
        </div>
      ) : (
        <div className='flex h-[150px] items-center justify-center'>
          <p>Cannot fetch data</p>
        </div>
      )}
    </section>
  );
};

export default TopMoviesSection;
