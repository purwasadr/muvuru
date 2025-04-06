import { ButtonHTMLAttributes } from 'react';

// Define proper types for the carousel button
interface CarouselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  carouselState?: {
    currentSlide?: number;
    deviceType?: string;
  };
  onMove?: boolean;
}

const CarouselBtnRight = ({ onClick }: CarouselButtonProps) => {
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="absolute right-[4%] h-11 w-11 rounded-full bg-red-700 p-2 text-white shadow-md shadow-red-900 hover:bg-red-800 focus:outline-none"
      onClick={() => onClick()}
    >
      {/* Simple chevron right SVG */}
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
        className="h-full w-full"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
};

export default CarouselBtnRight;
