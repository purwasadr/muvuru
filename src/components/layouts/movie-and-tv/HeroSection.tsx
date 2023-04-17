import { getImageUrl } from '@/constants';
import { ImageOff } from 'lucide-react';
import Image from 'next/image';

interface Props {
  backdropPath?: string;
  alt?: string;
}

const HeroSection = ({ backdropPath, alt }: Props) => {
  return (
    <section className='relative h-[400px] max-w-screen-2xl'>
      {backdropPath ? (
        <Image
          className='object-cover brightness-[.8]'
          src={getImageUrl(1280, backdropPath ?? '')}
          fill
          alt={alt ?? ''}
        />
      ) : (
        <div className='flex h-full w-full items-center justify-center bg-slate-400'>
          <ImageOff className='h-[70%] w-[70%]' />
        </div>
      )}
      <div className='absolute inset-x-0 bottom-0 z-10 h-[300px] bg-gradient-to-t from-slate-800 to-transparent' />
    </section>
  );
};

export default HeroSection;
