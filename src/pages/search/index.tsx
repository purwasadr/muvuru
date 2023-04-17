import { Movie, ResponseList, Tv } from '@/types';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';

export default function Search({}: InferGetStaticPropsType<
  typeof getServerSideProps
>) {
  return <div>Enter</div>;
}

interface GSSProps {
  show?: ResponseList<Movie | Tv>;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  return {
    props: {},
    // redirect: {
    //   destination: '/search/movie',
    //   permanent: true,
    // },
  };
};
