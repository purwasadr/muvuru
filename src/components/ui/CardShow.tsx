import ScoreShow from '@/components/ui/ScoreShow';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Movie, Show, Tv } from '@/types';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ImageOff } from 'lucide-react'

interface Props {
  show: Show;
  fullWidth?: boolean;
}

const CardShow = ({
  show: { id, title, poster_path, vote_average, media_type, release_date },
  fullWidth = false,
}: Props) => {
  return (
    <Link
      href={media_type === 'movie' ? `/movie/${id}` : `/tv/${id}`}
      //  w-[150px] md:w-[180px]
      // min-w-[150px] max-w-[180px]
      className={cn(
        `@container relative aspect-[1/1.5] overflow-hidden rounded-lg flex flex-col justify-between ${
          fullWidth ? 'w-full' : 'w-[150px] md:w-[180px]'
        }`
      )}
    >
      <div className="relative z-10 bg-gradient-to-b to-transparent from-black py-3.5 @[170px]:py-4 px-3.5 @[170px]:px-4">
        <ScoreShow score={vote_average ?? 0} />
      </div>
      <div className="relative z-10 bg-gradient-to-t to-transparent from-black pt-8 pb-3.5 @[170px]:pb-4 px-3.5 @[170px]:px-4">
        <h4 className="mt-4 line-clamp-3">{`${title} ${
          release_date ? `(${new Date(release_date).getFullYear()})` : ''
        }`}</h4>
      </div>
      {poster_path ? (
        <Image
          className="z-0 object-cover"
          src={`${MOVIEDB_IMAGE_URL}/t/p/w200${poster_path}`}
          fill
          alt={`Poster ${title}`}
        />
      ) : (
        <div className="absolute z-0 bg-slate-400 flex justify-center items-center w-full h-full">
          <ImageOff className="h-14 w-14" />
        </div>
      )}
    </Link>
  );
};

export default CardShow;
