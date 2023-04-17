import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  caption: string;
  items: { caption: string; link: string }[];
}

const DropdownNav = ({ caption, items, className }: Props) => {
  return (
    <DropdownMenu.Root
      modal={false}
      onOpenChange={(open) => {
        document.body.style.paddingRight = open ? '0px' : '';
      }}
    >
      <DropdownMenu.Trigger asChild>
        <span
          className={twMerge(
            'flex cursor-pointer items-center space-x-1',
            className
          )}
          aria-label='Caption'
        >
          <p>{caption}</p>
          <ChevronDown className='mt-0.5 h-4 w-4' />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-50 min-w-[120px] rounded-md  border border-slate-700 bg-slate-800 p-1 will-change-[opacity,transform]'
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
          {/* <DropdownMenu.Arrow className="fill-white" /> */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownNav;
