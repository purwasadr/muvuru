import PaginationSection from '@/components/layouts/discover/PaginationSection';
import SortAndFilterSection from '@/components/layouts/discover/SortAndFilterSection';
import CardShow from '@/components/ui/CardShow';
import { ResponseList, Show } from '@/types';

interface Props {
  showDiscover?: ResponseList<Show>;
  prefixPath: string;
}

const DiscoverPage = ({showDiscover, prefixPath}: Props) => {
  return (
    <div className="mx-auto container page-padding-x mt-[68px]">
      <SortAndFilterSection prefixPath={prefixPath} />
       {/* py-4 grid md:grid-cols-[repeat(auto-fit,minmax(0,180px))] grid-cols-[repeat(auto-fit,minmax(0,150px))] md:max-xl:place-content-center gap-x-3 gap-y-5 place-content-center sm:place-content-between */}
      <ul className="w-full py-4 grid grid-cols-[repeat(auto-fit,minmax(0,150px))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 place-content-center sm:place-content-start">
        {showDiscover?.results?.map((show) => (
          <CardShow fullWidth key={show.id} show={show}/>
        ))}
      </ul>
      <PaginationSection totalPages={showDiscover?.total_pages} />
    </div>
  );
}

export default DiscoverPage;