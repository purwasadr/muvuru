import Dropdown, { DropdownItem } from '@/components/ui/Dropdown';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { SelectItem } from '@/components/ui/Select';
import { useRouter } from 'next/router';
import { isString } from '@/utils';
import { discoverSortSelections, showSorting } from '@/constants';



interface Props {
  prefixPath: string;
}

const SortAndFilterSection = ({prefixPath}: Props) => {
  const router = useRouter();
  const querySortBy = router.query.sort_by?.toString();
  const sortBy = discoverSortSelections.find((item) => item.value === querySortBy) ? querySortBy : discoverSortSelections[0].value ;

  const handleSelectChange = (value: string) => {
    router.push({
      pathname: prefixPath,
      query: { page: 1, sort_by: value },
    });
  };

  return (
    <section className="py-4">
      <div className="s">
        <label className="block">Sort</label>
        <Select
          className="mt-2"
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
