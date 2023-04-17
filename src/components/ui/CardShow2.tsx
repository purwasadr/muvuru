import { getImageUrl } from '@/constants';
import { Show } from '@/types';
import { getDateShort } from '@/utils';
import { ImageOff, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  show: Pick<
    Show,
    | 'overview'
    | 'title'
    | 'poster_path'
    | 'vote_average'
    | 'release_date'
    | 'id'
  >;
  mediaType: 'movie' | 'tv';
}

const CardShow2 = ({ show, mediaType }: Props) => {
  const { id, title, overview, poster_path, vote_average, release_date } = show;

  return (
    <li className='flex flex-col gap-5 px-5 max-sm:items-center sm:flex-row'>
      <div className='relative aspect-[1/1.5] w-full max-w-[180px] overflow-hidden rounded-md'>
        {poster_path ? (
          <Image
            className=''
            src={getImageUrl(500, poster_path ?? '')}
            alt={title ?? ''}
            fill
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-slate-400'>
            <ImageOff className='h-[50%] w-[50%]' />
          </div>
        )}
      </div>
      <div className='flex-1 py-1'>
        <Link href={mediaType === 'movie' ? `/movie/${id}` : `/tv/${id}`}>
          <h3 className='line-clamp-2 max-sm:text-center'>{title}</h3>
        </Link>
        <div className='mt-3 flex items-center space-x-2 max-sm:justify-center'>
          <div className='-mr-1 flex items-center space-x-1'>
            <p className='-mr-0.5'>{vote_average || 'n/a'}</p>
            <Star className='h-[16px] stroke-yellow-500' />
          </div>
          <p>•</p>
          <p>{getDateShort(release_date?.toString())}</p>
        </div>
        <p className='mt-3 line-clamp-6 text-secondary max-sm:text-center'>
          {overview}
        </p>
      </div>
    </li>
  );
};

export default CardShow2;
