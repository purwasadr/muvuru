import { ShowSorting } from '@/constants';
import * as SelectPrimitive from '@radix-ui/react-select';
// import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SelectItem extends ShowSorting {}

interface Props extends SelectPrimitive.SelectProps {
  className?: string;
  items: SelectItem[];
}

const SelectMediaType = ({ className, items, defaultValue, onValueChange, value }: Props) => {
  return (
    <SelectPrimitive.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
    >
      <SelectPrimitive.Trigger
        className={twMerge(
          'flex items-center text-sm rounded-full px-4 gap-1 bg-transparent outline-none',
          className
        )}
        aria-label="Type"
      >
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className="text-primary">
          <ChevronDown className="h-[15px] w-[15px]" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          className="z-50 overflow-hidden bg-slate-800 border-[1px] border-slate-700 rounded-md"
        >
          <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] bg-slate-800 cursor-default">
            <ChevronUp />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport className="p-1">
            <SelectPrimitive.Group>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.caption}
                </SelectItem>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] bg-slate-800 text-white cursor-default">
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
      'relative text-sm text-primary rounded-md flex items-center py-2 pl-3 pr-8 select-none data-[disabled]:text-secondary data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-slate-700',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export default SelectMediaType;
