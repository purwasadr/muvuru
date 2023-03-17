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
  const { query } = ctx.query;

  const [movies] = await Promise.allSettled([getSearchTv(query?.toString() ?? '')])

  if (movies.status ==='fulfilled') {
    return {
      props: {
        show: movies.value
      }
    }
  }

  return {
    props:{

    }
  }
}