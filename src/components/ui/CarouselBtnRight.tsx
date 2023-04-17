import { ChevronRight } from 'lucide-react';

const CarouselBtnRight = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className='absolute right-[4%] h-11 w-11 rounded-full bg-red-700 p-2 text-white shadow-md shadow-red-900 hover:bg-red-800 focus:outline-none'
      onClick={() => onClick()}
    >
      <ChevronRight className='h-full w-full' />
    </button>
  );
};

export default CarouselBtnRight;
