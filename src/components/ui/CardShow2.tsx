import ScoreShow from '@/components/ui/ScoreShow';
import { getImageUrl } from '@/constants';
import { Show } from '@/types';
import { getDateShort } from '@/utils';
import { ImageOff, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  show: Pick<Show, 'overview' | 'title' | 'poster_path' | 'vote_average' | 'release_date' | 'id'>;
  mediaType: 'movie' | 'tv';
}

const CardShow2 = ({show, mediaType}: Props) => {
  const { id, title, overview, poster_path, vote_average, release_date } = show

  return (
    <li className="flex flex-col max-sm:items-center sm:flex-row gap-5 px-5">
      <div className="relative aspect-[1/1.5] w-full max-w-[180px] rounded-md overflow-hidden">
        {poster_path ? (
          <Image className="" src={getImageUrl(500, poster_path ?? '')} alt={title ?? ''} fill />
        ) : (
          <div className="bg-slate-400 h-full w-full flex justify-center items-center">
            <ImageOff className="w-[50%] h-[50%]" />
          </div>
        )}
      </div>
      <div className="flex-1 py-1">
        <Link href={mediaType === 'movie' ? `/movie/${id}` : `/tv/${id}`}>
          <h3 className='line-clamp-2 max-sm:text-center'>{title}</h3>
        </Link>
        <div className="flex space-x-2 items-center mt-3 max-sm:justify-center">
          <div className="flex items-center space-x-1 -mr-1">
            <p className="-mr-0.5">{vote_average || 'n/a'}</p>
            <Star className='h-[16px] stroke-yellow-500' />
          </div>
          <p>•</p>
          <p>{getDateShort(release_date?.toString())}</p>
        </div>
        <p className="mt-3 text-secondary line-clamp-6 max-sm:text-center">{overview}</p>
      </div>
    </li>
  );
}

export default CardShow2;