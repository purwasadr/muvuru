import { getImageUrl } from '@/constants';
import Image from 'next/image';

interface Props {
  backdropPath?: string;
  alt?: string;
}

const HeroSection = ({ backdropPath, alt }: Props) => {
  return (
    <section className="relative h-[400px]">
      <Image
        className="object-cover brightness-[.8]"
        src={getImageUrl(1280, backdropPath ?? '')}
        fill
        alt={alt ?? ''}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 h-[300px] bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  );
};

export default HeroSection;
