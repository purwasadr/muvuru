import { getMoviesDiscover } from '@/api/movie';
import SortAndFilterSection from '@/components/layouts/discover/SortAndFilterSection';
import CardShow from '@/components/ui/CardShow';
import { Movie, ResponseList, Show } from '@/types';
import { getOnFulfilled, isString } from '@/utils';
import { toShow } from '@/utils/mapper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

interface Props {
  showDiscover?: ResponseList<Show>;
  prefixPath: string;
}

const DiscoverPage = ({showDiscover, prefixPath}: Props) => {
  const router = useRouter();
  const page = Number.parseInt(isString(router.query.page) ?? '1');

  return (
    <div className="mx-auto container page-padding-x mt-[68px]">
      <SortAndFilterSection prefixPath={prefixPath} />
      <ul className="py-4 grid grid-cols-[repeat(auto-fit,minmax(0,180px))] gap-x-3 gap-y-5 place-content-center sm:place-content-between">
        {showDiscover?.results?.map((show) => (
          <CardShow key={show.id} show={show}/>
        ))}
      </ul>
      <ReactPaginate
        className="flex items-center w-fit mx-auto py-6 "
        breakLinkClassName='pagination-break-link'
        pageLinkClassName="pagination-page-link"
        activeLinkClassName='pagination-active-link'
        previousLinkClassName='pagination-previous-link'
        nextLinkClassName='pagination-next-link'
        nextLabel={<ChevronRight className="h-5 w-5" />}
        previousLabel={<ChevronLeft className="h-5 w-5" />}
        pageRangeDisplayed={3}
        marginPagesDisplayed={0}
        onClick={(clickEvent) => {
            if (clickEvent.isActive) {
              return false;
            }
            router.push({
              pathname: prefixPath,
              // Ditambahkan apa ya
              query: { ...router.query, page: (clickEvent.nextSelectedPage ?? 0 ) + 1 },
            })
          return false;
        }}
        forcePage={page - 1}
        pageCount={showDiscover?.total_pages ?? 0}
      />
    </div>
  );
}

export default DiscoverPage;