import PaginationSection from '@/components/layouts/search/PaginationSection';
import SearchBarSection from '@/components/layouts/search/SearchBarSection';
import ShowsSection from '@/components/layouts/search/ShowsSection';
import { Movie, ResponseList, Tv } from '@/types';

interface Props {
  selectValue: string;
  shows?: ResponseList<Movie | Tv>;
}

const SearchPage = ({ selectValue, shows }: Props) => {
  return (
    <div className='page-padding-x container mx-auto mt-[68px] [&>*]:mx-auto'>
      <SearchBarSection className='py-6' selectValue={selectValue} />
      <ShowsSection shows={shows?.results} />
      <PaginationSection totalPages={shows?.total_pages} />
    </div>
  );
};

export default SearchPage;
