import Button from '@/components/ui/Button';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

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
    <DropdownMenu.Root modal={false} >
      <DropdownMenu.Trigger asChild>
      <button className="bg-red-700 hover:bg-red-800 text-white rounded-md text-sm px-4 py-2 shadow-sm focus:outline-none disabled:pointer-events-none">SWWW</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[120px] border border-slate-700 bg-slate-800 rounded-md p-1"
          sideOffset={5}
        >
          {items.map((item) => (
            <DropdownMenu.Item key={item.link} asChild>
              <Link
                className="text-sm rounded-md flex items-center py-2 px-3 select-none outline-none data-[disabled]:text-secondary data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-700"
                href={item.link}
                
              >{item.caption}</Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
