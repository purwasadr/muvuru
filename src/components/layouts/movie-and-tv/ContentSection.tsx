import CastAndCrewSection from '@/components/layouts/movie-and-tv/CastAndCrewSection';
import DetailsSection from '@/components/layouts/movie-and-tv/DetailsSection';
import Button from '@/components/ui/Button';
import ScoreShow from '@/components/ui/ScoreShow';
import { getImageUrl } from '@/constants';
import { ShowCredit, ShowDetail } from '@/types';
import { getDateShort, minuteToText } from '@/utils';
import { ImageOff } from 'lucide-react';
import Image from 'next/image';

interface Props {
  showDetail: ShowDetail;
  showCredit?: ShowCredit;
}

const getSeriesYear = (first_air_date?: Date, last_air_date?: Date) => {
  let date: string = '';
  if (first_air_date) {
    date = `(${new Date(first_air_date).getFullYear()}`;
  }

  if (last_air_date) {
    date = `${date}-${new Date(last_air_date).getFullYear()})`;
  } else {
    date = `${date})`;
  }
  return date;
};

const ContentSection = ({ showDetail, showCredit }: Props) => {
  const {
    title,
    poster_path,
    vote_average,
    vote_count,
    first_air_date,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    media_type,
    original_title
  } = showDetail;

  return (
    <section className='relative -top-[200px] z-20 -mb-[200px] flex flex-col gap-x-10 lg:flex-row'>
      {/* Child section */}
      <div className='relative'>
        {poster_path ? (
          <Image
            className='rounded-lg object-cover shadow-md'
            width={180}
            height={270}
            src={getImageUrl(500, poster_path ?? '')}
            alt={title ?? ''}
          />
        ) : (
          <div className='flex h-[270px] w-[180px] items-center justify-center rounded-lg bg-slate-400 shadow-md'>
            <ImageOff className='h-[50%] w-[50%]' />
          </div>
        )}
      </div>
      {/* Child section */}
      <div className='mt-8 flex-1 md:mt-[55px] leading-'>
        <h1>{title}</h1>
        <p className='mt-2 text-secondary'>
          Original title : {original_title || '-'}
        </p>
        {media_type === 'movie' ? (
          <div className='mt-2 flex space-x-2'>
            <p>{getDateShort(showDetail.release_date?.toString())}</p>
            <p>•</p>
            <p>{minuteToText(showDetail.runtime)}</p>
          </div>
        ) : (
          <div className='mt-2 flex flex-wrap gap-x-2'>
            <p>{`Series ${
              first_air_date || last_air_date
                ? getSeriesYear(first_air_date, last_air_date)
                : '-'
            }`}</p>
            <p>•</p>
            <p>{`${number_of_episodes || '-'} Episodes`}</p>
            <p>•</p>
            <p>{`${number_of_seasons || '-'} Seasons`}</p>
          </div>
        )}
        <div className='mt-5 flex items-center  space-x-4'>
          <div className='flex items-center space-x-3'>
            <ScoreShow
              className='bg-slate-700'
              radius={22}
              fontSize={'base'}
              stroke={2.3}
              score={vote_average ?? 0}
            />
            <div>
              <p className='font-semibold'>
                {showDetail.vote_count?.toLocaleString() || '-'}
              </p>
              <p className='-mt-0.5 text-sm text-secondary'>reviews</p>
            </div>
          </div>
          <div className='h-7 w-[1px] bg-slate-700' />
          <Button fullRounded size={'base'}>
            Watch Trailer
          </Button>
        </div>
        <p className='mt-5 leading-relaxed text-secondary'>
          {showDetail.overview}
        </p>
        <DetailsSection className="mt-8" showDetail={showDetail} />
      </div>
      {/* Child section */}
      <CastAndCrewSection
        className='mt-10 lg:mt-[55px] lg:w-full lg:max-w-[275px]'
        casts={showCredit?.cast}
      />
    </section>
  );
};

export default ContentSection;
