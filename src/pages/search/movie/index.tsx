import { getSearchMovies } from '@/api/movie';
import { getSearchTv } from '@/api/tv';
import SearchPage from '@/components/layouts/search/SearchPage';
import { Movie, ResponseList, Tv } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function SearchMovie({show}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SearchPage selectValue='movie' shows={show} />
  );
}

interface GSSProps {
  show?: ResponseList<Movie | Tv>;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const query = ctx.query?.query?.toString() ?? '';
  const page = ctx.query?.page?.toString() ?? '1'

  const [movies] = await Promise.allSettled([getSearchMovies(query, Number(page))])

  if (movies.status ==='fulfilled') {
    return {
      props: {
        show: movies.value
      }
    }
  }

  console.log('movie log', movies);
  

  return {
    props:{

    }
  }
}