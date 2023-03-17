import { ChevronLeftIcon } from 'lucide-react';

const CarouselBtnLeft = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="absolute left-[4%] h-11 w-11 p-2 bg-red-700 text-white hover:bg-red-800 focus:outline-none rounded-full shadow-md shadow-red-900" onClick={() => onClick()}>
    <ChevronLeftIcon className="w-full h-full" />
  </button>;
};

export default CarouselBtnLeft;