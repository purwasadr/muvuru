import ProgressRing from '@/components/ui/ProgressRing';
import ScoreShow from '@/components/ui/ScoreShow';
import { MOVIEDB_IMAGE_URL } from '@/constants/env';
import { Movie, Show, Tv } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  show: Show;
}

const CardShow = ({
  show: { id, title, poster_path, vote_average, media_type, release_date },
}: Props) => {
  return (
    <Link
      href={media_type === 'movie' ? `/movie/${id}` : `/tv/${id}`}
      className="relative w-[180px] aspect-[1/1.5] overflow-hidden rounded-xl flex flex-col justify-between"
    >
      <div className="relative z-10 bg-gradient-to-b to-transparent from-black py-4 px-4">
        <ScoreShow score={vote_average ?? 0} />
      </div>
      <div className="relative z-10 bg-gradient-to-t to-transparent from-black pt-8 pb-4 px-4">
        <h4 className="mt-4">{`${title} ${release_date ?  `(${new Date(release_date).getFullYear()})` : ''}`}</h4>
      </div>
      <Image
        className="z-0 object-cover"
        src={`${MOVIEDB_IMAGE_URL}/t/p/w200${poster_path}`}
        fill
        alt={`Poster ${title}`}
      />
    </Link>
  );
};

export default CardShow;
