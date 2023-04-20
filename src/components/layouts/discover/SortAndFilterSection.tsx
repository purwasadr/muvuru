import { useRouter } from 'next/router';
import { discoverSortSelections } from '@/constants';
import SelectFilter from '@/components/layouts/discover/SelectFilter';

interface Props {
  prefixPath: string;
}

const SortAndFilterSection = ({ prefixPath }: Props) => {
  const router = useRouter();
  const querySortBy = router.query.sort_by?.toString();
  const sortBy = discoverSortSelections.find(
    (item) => item.value === querySortBy
  )
    ? querySortBy
    : discoverSortSelections[0].value;

  const handleSelectChange = (value: string) => {
    router.push({
      pathname: prefixPath,
      query: { page: 1, sort_by: value },
    });
  };

  return (
    <section className='py-4'>
      <div className=''>
        <label className='block'>Sort By</label>
        <SelectFilter
          className='mt-2'
          onValueChange={handleSelectChange}
          items={discoverSortSelections}
          value={sortBy}
          defaultValue={discoverSortSelections[0].value}
        />
      </div>
    </section>
  );
};

export default SortAndFilterSection;
