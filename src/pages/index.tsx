import { getPopularMovies } from '@/api/movie';
import { getTrending } from '@/api/trending';
import HeroSection from '@/components/layouts/home/HeroSection';
import TopMoviesSection from '@/components/layouts/home/TrendingSection';
import { Movie, Show, Tv } from '@/types';
import { getOnFulfilled } from '@/utils';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function Home({
  trending,
  popularMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={`[&>*]:mx-auto`}>
      <HeroSection popularMovies={popularMovies} />
      <div className="mt-10 container px-6 md:px-10 [&>*]:py-9">
        <TopMoviesSection trending={trending} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  trending?: Show[];
  popularMovies?: Movie[];
}> = async (ctx) => {
  const [trending, popularMovies] = await Promise.allSettled([
    getTrending(),
    getPopularMovies(),
  ]);

  return {
    props: {
      trending: getOnFulfilled(trending) || [],
      popularMovies: getOnFulfilled(popularMovies) || [],
    },
  };
};
