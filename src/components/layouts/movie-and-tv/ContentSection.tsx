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
    date = `)`
  }
  return date
}

const ContentSection = ({ showDetail, showCredit }: Props) => {  
  const {title, poster_path, vote_average, vote_count} = showDetail;

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
        {/* <div className='flex items-center mt-4 space-x-2'>
          <ScoreShow className="" radius={28} fontSize={'lg'} stroke={3} score={vote_average ?? 0} />
          <p className='text-sm'>{`${vote_count?.toLocaleString()}`} <span className="text-secondary">ratings</span></p>
        </div> */}
      </div>
      {/* Child section */}
      <div className="mt-10 md:mt-[55px] flex-1">
        <h1>{showDetail.title}</h1>
        <p className="text-sm text-secondary mt-2">Original title : {showDetail.original_title}</p>
        {showDetail.media_type === 'movie' ? (
          <div className="flex space-x-2 text-sm mt-2">
            <p>{getDateShort(showDetail.release_date?.toString())}</p>
            <p>•</p>
            <p>{minuteToText(showDetail.runtime)}</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-x-2 text-sm mt-2">
            <p>{`Series ${getSeriesYear(showDetail.first_air_date, showDetail.last_air_date)}`}</p>
            <p>•</p>
            <p>{`${showDetail.number_of_episodes} Episodes`}</p>
            <p>•</p>
            <p>{`${showDetail.number_of_seasons} Seasons`}</p>
          </div>
        )}
        <Button className="rounded-full mt-5" size={'large'}>Watch Trailer</Button>
        <p className="mt-5 text-sm leading-relaxed text-secondary">{showDetail.overview}</p>
        <DetailsSection showDetail={showDetail} />
      </div>
      {/* Child section */}
      <div className="mt-[55px]">
        <h2>Cast and Crew</h2>
        <ul className='space-y-4 mt-5'>
          {showCredit?.cast?.slice(0, 5).map((cast) => (
            <CardCredit key={cast.id} credit={cast} />
          ))}
        </ul>
        <Button className="mx-auto" intent="text">View All</Button>
      </div>
    </section>
  );
};

export default ContentSection;
