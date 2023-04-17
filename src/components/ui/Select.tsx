import { Overlay } from '@/components/ui/Overlay';
import { cn } from '@/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export interface SelectItem {
  id: number;
  caption: string;
  value: string;
}

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-[35px] items-center gap-1 rounded bg-red-700 px-3 text-sm outline-none hover:bg-red-800',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className='h-4 w-4 opacity-50' />
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectContent = React.ForwardRefExoticComponent<
  { open: boolean } & SelectPrimitive.SelectContentProps &
    React.RefAttributes<HTMLDivElement>
>;

export const SelectContent = React.forwardRef<
  React.ElementRef<SelectContent>,
  React.ComponentPropsWithoutRef<SelectContent>
>(({ className, open, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <>
      {/* Workaround for touch events propagating to underlying elements https://github.com/radix-ui/primitives/issues/1658 */}
      <Overlay open={open} />
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          'z-50 overflow-hidden rounded-md border-[1px] border-slate-700 bg-slate-800',
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className='p-1'>
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'flex min-w-[150px] select-none items-center rounded-md px-3 py-2 text-sm font-semibold text-primary',
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex min-w-[150px] select-none items-center rounded-md px-3 py-2 text-sm text-primary data-[disabled]:pointer-events-none data-[highlighted]:bg-slate-700 data-[disabled]:text-secondary data-[highlighted]:outline-none',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
