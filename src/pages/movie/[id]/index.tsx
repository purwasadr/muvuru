import { getMovieCredit, getMovieDetail } from '@/api/movie';
import DetailPage from '@/components/layouts/movie-and-tv/DetailPage';
import { ShowCredit, ShowDetail } from '@/types';
import { toShowDetail } from '@/utils/mapper';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function DetailShow({
  movieDetail,
  showCredit,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <DetailPage showDetail={movieDetail} showCredit={showCredit} />;
}

export const getServerSideProps: GetServerSideProps<{
  movieDetail?: ShowDetail;
  showCredit?: ShowCredit;
}> = async ({ params }) => {
  const id = params?.id ? Number.parseInt(params?.id?.toString()) : undefined;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const [movieDetail, movieCredit] = await Promise.allSettled([
    getMovieDetail(id),
    getMovieCredit(id),
  ]);

  let coProps = {
    props: {},
  };

  if (movieDetail.status === 'fulfilled') {
    coProps = {
      props: {
        ...coProps.props,
        movieDetail: toShowDetail(movieDetail.value),
      },
    };
  } else if (movieDetail.reason?.response?.status === 404) {
    return {
      notFound: true,
    };
  }

  if (movieCredit.status === 'fulfilled') {
    // console.log(movieCredit.value);
    coProps = {
      props: {
        ...coProps.props,
        showCredit: movieCredit.value,
      },
    };
  }

  return coProps;
};
