import { ChevronRight } from 'lucide-react';

const CarouselBtnRight = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="absolute right-[4%] h-11 w-11 p-2 bg-red-700 text-white hover:bg-red-800 focus:outline-none rounded-full shadow-md shadow-red-900" onClick={() => onClick()}>
    <ChevronRight className="w-full h-full" />
  </button>;
};

export default CarouselBtnRight;