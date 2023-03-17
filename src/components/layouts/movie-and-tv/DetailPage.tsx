import ContentSection from '@/components/layouts/movie-and-tv/ContentSection';
import HeroSection from '@/components/layouts/movie-and-tv/HeroSection';
import { ShowCredit, ShowDetail } from '@/types';

interface Props {
  showDetail?: ShowDetail;
  showCredit?: ShowCredit;
}

const DetailPage = ({ showDetail, showCredit }: Props) => {
  
  if (!showDetail) {
    return (
      <div>Error cuk</div>
    )
  }

  return (
    <div className={`[&>*]:mx-auto `}>
      <HeroSection backdropPath={showDetail.backdrop_path} alt={showDetail.title} />
      <div className="container px-6 md:px-10">

        <ContentSection showDetail={showDetail} showCredit={showCredit}/>
      </div>
    </div>
  );
};

export default DetailPage;
