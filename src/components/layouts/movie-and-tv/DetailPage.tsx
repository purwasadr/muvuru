import ContentSection from '@/components/layouts/movie-and-tv/ContentSection';
import HeroSection from '@/components/layouts/movie-and-tv/HeroSection';
import { ShowCredit, ShowDetail } from '@/types';
import Head from 'next/head';

interface Props {
  showDetail?: ShowDetail;
  showCredit?: ShowCredit;
}

const DetailPage = ({ showDetail, showCredit }: Props) => {
  if (!showDetail) {
    return <div>Error cuk</div>;
  }

  return (
    <div className={`[&>*]:mx-auto `}>
      <Head>
        <title>{showDetail?.title ?? 'Muvuru'}</title>
      </Head>
      <HeroSection
        backdropPath={showDetail.backdrop_path}
        alt={showDetail.title}
      />
      <div className='page-padding-x container'>
        <ContentSection showDetail={showDetail} showCredit={showCredit} />
        <div className='h-12'></div>
      </div>
    </div>
  );
};

export default DetailPage;
