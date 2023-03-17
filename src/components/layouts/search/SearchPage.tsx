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
    <div className="[&>*]:mx-auto mx-auto container px-6 md:px-10 mt-[68px]">
      <SearchBarSection className='py-6' selectValue={selectValue} />
      <ShowsSection shows={shows?.results} />
      <PaginationSection totalPages={shows?.total_pages} />
    </div>
  );
};

export default SearchPage;
