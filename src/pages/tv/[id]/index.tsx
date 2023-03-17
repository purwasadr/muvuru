import { getMovieCredit, getMovieDetail } from '@/api/movie';
import { getTvCredit, getTvDetail } from '@/api/tv';
import DetailPage from '@/components/layouts/movie-and-tv/DetailPage';
import { MovieDetail, ShowCredit, ShowDetail } from '@/types';
import { toShowDetail } from '@/utils/mapper';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export default function DetailTv({movieDetail, showCredit}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <DetailPage showDetail={movieDetail} showCredit={showCredit} />
  );
}

export const getServerSideProps: GetServerSideProps<{
  movieDetail?: ShowDetail,
  showCredit?: ShowCredit
}> = async ({ params }) => {

  const id = params?.id ? Number.parseInt(params?.id?.toString()) : undefined;

  if (!id) {
    return {
      notFound: true
    } 
  }

  const [tvDetail, tvCredit] = await Promise.allSettled([ getTvDetail(id), getTvCredit(id)]);

  let coProps = {
    props: {}
  };

  if (tvDetail.status === 'fulfilled') {
    coProps = {
      props: {
        ...coProps.props,
        movieDetail: toShowDetail(tvDetail.value),
      } 
    }
  } else if (tvDetail.reason?.response?.status === 404) {
    return {
      notFound: true
    }
  };

  if (tvCredit.status === 'fulfilled') {
    coProps = {
      props: {
        ...coProps.props,
        showCredit: tvCredit.value,
      } 
    };
  }

  return coProps;
};
