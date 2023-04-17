import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface DropdownItem {
  caption: string;
  link: string;
}

interface Props {
  trigger?: ReactNode;
  items: { caption: string; link: string }[];
}

const Dropdown = ({ trigger, items }: Props) => {
  return (
    // Modal false karena menyebabkan hilangnya scrollbar diluar dropdown dan tidak bisa berinteraksi diluar dropdown
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className='rounded-md bg-red-700 px-4 py-2 text-sm text-white shadow-sm hover:bg-red-800 focus:outline-none disabled:pointer-events-none'>
          SWWW
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='z-50 min-w-[120px] rounded-md border border-slate-700 bg-slate-800 p-1'
          sideOffset={5}
        >
          {items.map((item) => (
            <DropdownMenu.Item key={item.link} asChild>
              <Link
                className='flex select-none items-center rounded-md px-3 py-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-700 data-[disabled]:text-secondary'
                href={item.link}
              >
                {item.caption}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
