import PaginationSection from '@/components/layouts/discover/PaginationSection';
import SortAndFilterSection from '@/components/layouts/discover/SortAndFilterSection';
import CardShow from '@/components/ui/CardShow';
import { ResponseList, Show } from '@/types';

interface Props {
  showDiscover?: ResponseList<Show>;
  prefixPath: string;
}

const DiscoverPage = ({ showDiscover, prefixPath }: Props) => {
  return (
    <div className='page-padding-x container mx-auto mt-[68px]'>
      <SortAndFilterSection prefixPath={prefixPath} />
      {showDiscover ? (
        <ul className='grid w-full grid-cols-[repeat(auto-fit,minmax(0,150px))] place-content-center gap-3 py-4 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] sm:place-content-start'>
          {showDiscover?.results?.map((show) => (
            <CardShow fullWidth key={show.id} show={show} />
          ))}
        </ul>
      ) : (
        <div className='flex h-[200px] items-center justify-center'>
          <p>Cannot fetch data</p>
        </div>
      )}
      {/* py-4 grid md:grid-cols-[repeat(auto-fit,minmax(0,180px))] grid-cols-[repeat(auto-fit,minmax(0,150px))] md:max-xl:place-content-center gap-x-3 gap-y-5 place-content-center sm:place-content-between */}
      {showDiscover?.total_pages ? (
        <PaginationSection totalPages={showDiscover?.total_pages} />
      ) : undefined}
    </div>
  );
};

export default DiscoverPage;
