import { Movie, ResponseList, Tv } from '@/types';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function Search(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <div>Enter</div>;
}

interface GSSProps {
  show?: ResponseList<Movie | Tv>;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (_ctx) => {
  return {
    props: {},
    // redirect: {
    //   destination: '/search/movie',
    //   permanent: true,
    // },
  };
};
