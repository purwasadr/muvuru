import { getPopularMovies, getUpcomingMovies } from '@/api/movie';
import { getTrending } from '@/api/trending';
import HeroSection from '@/components/layouts/home/HeroSection';
import TopMoviesSection from '@/components/layouts/home/TrendingSection';
import { UpcomingSection } from '@/components/layouts/home/UpcomingSection';
import { Movie, Show, Tv } from '@/types';
import { getOnFulfilled } from '@/utils';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function Home({
  trending,
  popularMovies,
  upcomingMovies
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={`[&>*]:mx-auto`}>
      <HeroSection popularMovies={popularMovies} />
      <div className="mt-10 container page-padding-x [&>*]:py-9">
        <TopMoviesSection trending={trending} />
        <UpcomingSection upcomingMovies={upcomingMovies} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  trending?: Show[];
  popularMovies?: Movie[];
  upcomingMovies?: Movie[];
}> = async (ctx) => {
  const [trending, popularMovies, upcomingMovies] = await Promise.allSettled([
    getTrending(),
    getPopularMovies(),
    getUpcomingMovies()
  ]);
  
  let props = {};

  const trendingRes = getOnFulfilled(trending)?.results;
  
  if (trendingRes) {
    props = {
      ...props,
      trending: trendingRes
    }
  }

  const popularMoviesRes = getOnFulfilled(popularMovies)?.results;
  if (popularMoviesRes) {
    props = {
      ...props,
      popularMovies: popularMoviesRes
    }
  }

  const upcomingMoviesRes = getOnFulfilled(upcomingMovies)?.results

  if (upcomingMoviesRes) {
    props = {
      ...props,
      upcomingMovies: upcomingMoviesRes
    }
  }

  return {
    props
  };
};
