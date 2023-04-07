import { getSearchMovies } from '@/api/movie';
import { getSearchTv } from '@/api/tv';
import SearchPage from '@/components/layouts/search/SearchPage';
import { Movie, ResponseList, Tv } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function SearchTv({show}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SearchPage selectValue='tv' shows={show} />
  );
}

interface GSSProps {
  show?: ResponseList<Movie | Tv>;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const query = ctx.query?.query?.toString() ?? '';
  const page = ctx.query?.page?.toString() ?? '1'

  const [tv] = await Promise.allSettled([getSearchTv(query, Number(page))])

  if (tv.status ==='fulfilled') {
    return {
      props: {
        show: tv.value
      }
    }
  }

  return {
    props:{

    }
  }
}