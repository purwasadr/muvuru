import { getPopularMovies, getUpcomingMovies } from '@/api/movie';
import { getTrending } from '@/api/trending';
import HeroSection from '@/components/layouts/home/HeroSection';
import TopMoviesSection from '@/components/layouts/home/TrendingSection';
import { UpcomingSection } from '@/components/layouts/home/UpcomingSection';
import { Movie, Show } from '@/types';
import { getOnFulfilled } from '@/utils';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Home({
  trending,
  popularMovies,
  upcomingMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={`[&>*]:mx-auto`}>
      <HeroSection popularMovies={popularMovies} />
      <div className='page-padding-x container mt-10 [&>*]:py-9'>
        <TopMoviesSection trending={trending} />
        <UpcomingSection upcomingMovies={upcomingMovies} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  trending?: Show[];
  popularMovies?: Movie[];
  upcomingMovies?: Movie[];
}> = async () => {

  const [trending, popularMovies, upcomingMovies] = await Promise.allSettled([
    getTrending(),
    getPopularMovies(),
    getUpcomingMovies(),
  ]);

  let props = {};

  const trendingRes = getOnFulfilled(trending)?.results;

  if (trendingRes) {
    props = {
      ...props,
      trending: trendingRes,
    };
  }

  const popularMoviesRes = getOnFulfilled(popularMovies)?.results;
  if (popularMoviesRes) {
    props = {
      ...props,
      popularMovies: popularMoviesRes,
    };
  }

  const upcomingMoviesRes = getOnFulfilled(upcomingMovies)?.results;
  if (upcomingMoviesRes) {
    props = {
      ...props,
      upcomingMovies: upcomingMoviesRes,
    };
  }

  return {
    props,
    revalidate: 1800
  };
}