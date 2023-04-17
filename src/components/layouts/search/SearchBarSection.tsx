import SelectMediaType from '@/components/layouts/search/SelectMediaType';
import { Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { searchMediaType } from '@/constants';
import { FormEvent, useState } from 'react';
import { cn } from '@/utils';

interface Props {
  selectValue: string;
  className?: string;
}

const SearchBarSection = ({ selectValue, className }: Props) => {
  const router = useRouter();
  const { query } = router.query;
  const [searchQuery, setSearchQuery] = useState(query?.toString() ?? '');

  const handleSelectChange = (value: string) => {
    router.push({
      pathname: `/search/${value}`,
    });
  };

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: router.pathname,
      query: {
        query: searchQuery,
      },
    });
  };
  return (
    <section className={cn('', className)}>
      <form
        onSubmit={(e) => handleSubmitSearch(e)}
        className='mx-auto flex w-full max-w-xl items-center space-x-2.5 rounded-full bg-slate-700 py-1'
      >
        <SelectMediaType
          defaultValue={'movie'}
          value={selectValue}
          items={searchMediaType}
          onValueChange={handleSelectChange}
        />
        <div className='h-4 w-[1px] bg-slate-500'></div>
        <input
          className='block w-full rounded-md border-none bg-transparent px-0 shadow-sm focus:border-none focus:ring-0 sm:text-sm'
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className='pr-4'>
          <Search className='h-[20px] w-[20px]' />
        </div>
      </form>
    </section>
  );
};

export default SearchBarSection;
