import { ChevronLeftIcon } from 'lucide-react';

const CarouselBtnLeft = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className='absolute left-[4%] h-11 w-11 rounded-full bg-red-700 p-2 text-white shadow-md shadow-red-900 hover:bg-red-800 focus:outline-none'
      onClick={() => onClick()}
    >
      <ChevronLeftIcon className='h-full w-full' />
    </button>
  );
};

export default CarouselBtnLeft;
