import CastAndCrewSection from '@/components/layouts/movie-and-tv/CastAndCrewSection';
import DetailsSection from '@/components/layouts/movie-and-tv/DetailsSection';
import Button from '@/components/ui/Button';
import CardCredit from '@/components/ui/CardCredit';
import ScoreShow from '@/components/ui/ScoreShow';
import { getImageUrl } from '@/constants';
import { ShowCredit, ShowDetail } from '@/types';
import { getDateShort, minuteToText } from '@/utils';
import Image from 'next/image';

interface Props {
  showDetail: ShowDetail;
  showCredit?: ShowCredit;
}

const getSeriesYear = (first_air_date?: Date, last_air_date?: Date) => {
  let date: string = '';
  if (first_air_date) {
    date = `(${new Date(first_air_date).getFullYear()}`
  }

  if (last_air_date) {
    date = `${date}-${new Date(last_air_date).getFullYear()})`
  } else {
    date = `${date})`
  }
  return date
}

const ContentSection = ({ showDetail, showCredit }: Props) => {  
  const {title, poster_path, vote_average, vote_count, first_air_date, last_air_date, number_of_episodes, number_of_seasons} = showDetail;

  return (
    <section className="z-20 relative -top-[200px] flex flex-col lg:flex-row gap-x-10">
      {/* Child section */}
      <div className="relative">
        <Image
          className="rounded-lg object-cover shadow-md"
          width={180}
          height={270}
          src={getImageUrl(500, poster_path ?? '')}
          alt={title ?? ''}
        />
      </div>
      {/* Child section */}
      <div className="mt-10 md:mt-[55px] flex-1">
        <h1>{showDetail.title}</h1>
        <p className="text-secondary mt-2">Original title : {showDetail.original_title || '-'}</p>
        {showDetail.media_type === 'movie' ? (
          <div className="flex space-x-2 mt-2">
            <p>{getDateShort(showDetail.release_date?.toString())}</p>
            <p>•</p>
            <p>{minuteToText(showDetail.runtime)}</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-x-2 mt-2">
            <p>{`Series ${first_air_date || last_air_date ? getSeriesYear(first_air_date, last_air_date) : '-'}`}</p>
            <p>•</p>
            <p>{`${number_of_episodes || '-'} Episodes`}</p>
            <p>•</p>
            <p>{`${number_of_seasons || '-'} Seasons`}</p>
          </div>
        )}
        <div className="flex items-center space-x-4  mt-5">
          <div className="flex items-center space-x-3">
            <ScoreShow className="bg-slate-700" radius={22} fontSize={'md'} stroke={2.3} score={vote_average ?? 0} />
            <div>
              <p className="font-semibold">{showDetail.vote_count?.toLocaleString() || '-'}</p>
              <p className="text-secondary text-sm -mt-0.5">reviews</p>
            </div>
          </div>
          <div className="h-7 w-[1px] bg-slate-700" />
          <Button fullRounded size={'base'}>Watch Trailer</Button>
        </div>
        <p className="mt-5 leading-relaxed text-secondary">{showDetail.overview}</p>
        <DetailsSection showDetail={showDetail} />
      </div>
      {/* Child section */}
     <CastAndCrewSection className="mt-[55px] lg:max-w-[250px] lg:w-full" casts={showCredit?.cast?.slice(0, 5)} />
    </section>
  );
};

export default ContentSection;
