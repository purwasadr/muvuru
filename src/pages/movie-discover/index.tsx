import { getMoviesDiscover } from '@/api/movie';
import DiscoverPage from '@/components/layouts/discover/DiscoverPage';
import { discoverSortSelections } from '@/constants';
import { ResponseList, Show } from '@/types';
import { getOnFulfilled, isString } from '@/utils';
import { toShow } from '@/utils/mapper';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

export default function MovieDiscover({showDiscover} : InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
   <>
    <Head>
      <title>Discover Movies</title>
    </Head>
    <DiscoverPage showDiscover={showDiscover} prefixPath='/movie-discover' />
   </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  showDiscover?: ResponseList<Show>;
}> = async (ctx) => {
  const page = ctx.query?.page?.toString() ?? '1'
  const querySortBy = ctx.query?.sort_by?.toString();

  // Mengatasi input sort_by yang tidak valid dari url
  const sortBy = discoverSortSelections.find((item) => item.value === querySortBy) ? querySortBy : discoverSortSelections[0].value ;
  
  const [moviesDiscover] = await Promise.allSettled([getMoviesDiscover(Number.parseInt(page), sortBy)]);

  let props = {};

  if (moviesDiscover.status === 'fulfilled') {
    props = {
      ...props,
      showDiscover: {
        ...moviesDiscover.value,
        results: moviesDiscover.value?.results?.map((movie) => toShow(movie)),
      }
    }
  }

  return {
    props
  };
};
