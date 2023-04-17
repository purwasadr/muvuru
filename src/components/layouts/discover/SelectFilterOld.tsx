import { ShowSorting } from '@/constants';
import * as SelectPrimitive from '@radix-ui/react-select';
// import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SelectItem extends ShowSorting {}

interface Props extends SelectPrimitive.SelectProps {
  className?: string;
  items: SelectItem[];
}

const SelectFilter = ({
  className,
  items,
  defaultValue,
  onValueChange,
  value,
}: Props) => {
  return (
    <SelectPrimitive.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
    >
      <SelectPrimitive.Trigger
        className={twMerge(
          'flex h-[35px] items-center gap-1 rounded bg-red-700 px-3 text-sm outline-none hover:bg-red-800',
          className
        )}
        aria-label='Type'
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className='text-primary'>
          <ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position='popper'
          className='z-50 overflow-hidden rounded-md border-[1px] border-slate-700 bg-slate-800'
        >
          <SelectPrimitive.ScrollUpButton className='flex h-[25px] cursor-default items-center justify-center bg-slate-800'>
            <ChevronUp />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className='p-1'>
            <SelectPrimitive.Group>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.caption}
                </SelectItem>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className='flex h-[25px] cursor-default items-center justify-center bg-slate-800 text-white'>
            <ChevronDown />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      'relative flex min-w-[150px] select-none items-center rounded-md px-3 py-2 text-sm text-primary data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-700 data-[disabled]:text-secondary data-[highlighted]:outline-none',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export default SelectFilter;
