import { Overlay } from '@/components/ui/Overlay';
import { cn } from '@/utils';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
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
      'flex items-center text-sm rounded px-3 h-[35px] gap-1 bg-red-700 hover:bg-red-800 outline-none',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectContent = React.ForwardRefExoticComponent<{ open: boolean;} & SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>>

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
          'z-50 overflow-hidden bg-slate-800 border-[1px] border-slate-700 rounded-md',
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport className="p-1">
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
      'min-w-[150px] text-sm font-semibold text-primary rounded-md flex items-center py-2 px-3 select-none',
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
      'relative min-w-[150px] text-sm text-primary rounded-md flex items-center py-2 px-3 select-none data-[disabled]:text-secondary data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-slate-700',
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
