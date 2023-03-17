import { getTvDiscover } from '@/api/tv';
import DiscoverPage from '@/components/layouts/discover/DiscoverPage';
import { ResponseList, Show } from '@/types';
import { getOnFulfilled, isString } from '@/utils';
import { toShow } from '@/utils/mapper';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function TvDiscover({showDiscover} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
   <>
    <DiscoverPage showDiscover={showDiscover} prefixPath='/tv-discover' />
   </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  showDiscover?: ResponseList<Show>;
}> = async (ctx) => {
  const page = ctx.query?.page?.toString() ?? '1'
  const sortBy = isString(ctx.query?.sort_by) ?? 'popularity.desc'
  const [tvDiscover] = await Promise.allSettled([getTvDiscover(Number.parseInt(page), sortBy)]);
  const settleRes = getOnFulfilled(tvDiscover)

  const showDiscover = {
    ...settleRes,
    results: settleRes?.results?.map((movie) => (toShow(movie)))
  }

  return {
    props: {
      showDiscover
    },
  };
};
