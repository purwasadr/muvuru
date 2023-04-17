import { Overlay } from '@/components/ui/Overlay';
import { ShowSorting } from '@/constants';
import { cn } from '@/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SelectItem extends ShowSorting {}

interface Props extends SelectPrimitive.SelectProps {
  className?: string;
  items: SelectItem[];
}

const SelectMediaType = ({
  className,
  items,
  defaultValue,
  onValueChange,
  value,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <SelectPrimitive.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
      onOpenChange={(open) => setOpen(open)}
    >
      <SelectPrimitive.Trigger
        className={cn(
          'flex items-center gap-1 rounded-full bg-transparent pl-4 text-sm outline-none',
          className
        )}
        aria-label='Type'
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className='text-primary'>
          <ChevronDown className='h-[15px] w-[15px]' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <>
          <Overlay open={open} />
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
        </>
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
      'relative flex select-none items-center rounded-md py-2 pl-3 pr-8 text-sm text-primary data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-700 data-[disabled]:text-secondary data-[highlighted]:outline-none',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export default SelectMediaType;
