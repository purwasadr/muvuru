import { isString } from '@/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';

interface Props {
  totalPages?: number;
}

const PaginationSection = ({totalPages}: Props) => {
  const router = useRouter();
  const page = Number.parseInt(isString(router.query.page) ?? '1');

  return (
    <ReactPaginate
      className="flex items-center w-fit mx-auto py-6 "
      breakLinkClassName="pagination-break-link"
      pageLinkClassName="pagination-page-link"
      activeLinkClassName="pagination-active-link"
      previousLinkClassName="pagination-previous-link"
      nextLinkClassName="pagination-next-link"
      nextLabel={<ChevronRight className="h-5 w-5" />}
      previousLabel={<ChevronLeft className="h-5 w-5" />}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      onClick={(clickEvent) => {
        if (clickEvent.isActive) {
          return false;
        }
        router.push({
          pathname: router.pathname,
          // Ditambahkan apa ya
          query: {
            ...router.query,
            page: (clickEvent.nextSelectedPage ?? 0) + 1,
          },
        });
        return false;
      }}
      forcePage={page - 1}
      pageCount={totalPages ?? 0}
    />
  );
};

export default PaginationSection;
