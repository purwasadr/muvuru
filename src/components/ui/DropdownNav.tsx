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
    <DropdownMenu.Root modal={false} onOpenChange={(open) => { document.body.style.paddingRight = open ? "0px" : "";}}>
      <DropdownMenu.Trigger asChild>
        <span className={twMerge("cursor-pointer flex items-center space-x-1", className)} aria-label="Caption">
          <p>{caption}</p><ChevronDown className="h-4 w-4 mt-0.5" />
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[120px] border border-slate-700 bg-slate-800 rounded-md p-1  will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
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
          {/* <DropdownMenu.Arrow className="fill-white" /> */}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownNav;
