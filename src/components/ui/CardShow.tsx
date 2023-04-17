import ScoreShow from '@/components/ui/ScoreShow';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Show } from '@/types';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ImageOff } from 'lucide-react';

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
        `relative flex aspect-[1/1.5] flex-col justify-between overflow-hidden rounded-lg @container ${
          fullWidth ? 'w-full' : 'w-[150px] md:w-[180px]'
        }`
      )}
    >
      <div className='relative z-10 bg-gradient-to-b from-black to-transparent px-3.5 py-3.5 @[170px]:px-4 @[170px]:py-4'>
        <ScoreShow score={vote_average ?? 0} />
      </div>
      <div className='relative z-10 bg-gradient-to-t from-black to-transparent px-3.5 pb-3.5 pt-8 @[170px]:px-4 @[170px]:pb-4'>
        <h4 className='mt-4 line-clamp-3'>{`${title} ${
          release_date ? `(${new Date(release_date).getFullYear()})` : ''
        }`}</h4>
      </div>
      {poster_path ? (
        <Image
          className='z-0 object-cover'
          src={`${MOVIEDB_IMAGE_URL}/t/p/w200${poster_path}`}
          fill
          alt={`Poster ${title}`}
        />
      ) : (
        <div className='absolute z-0 flex h-full w-full items-center justify-center bg-slate-400'>
          <ImageOff className='h-14 w-14' />
        </div>
      )}
    </Link>
  );
};

export default CardShow;
