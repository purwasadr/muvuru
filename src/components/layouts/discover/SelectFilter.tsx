import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '@/components/ui/Select';
import { cn } from '@/utils';
import  * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

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
  const [open, setOpen] = useState(false);

  return (
    <Select
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
      onOpenChange={(opn) => setOpen(opn)}
    >
      <SelectPrimitive.Trigger
        className={cn(
          'flex items-center text-sm rounded px-3 h-[35px] gap-1 bg-red-700 hover:bg-red-800 outline-none',
          className
        )}
        aria-label="Sort By"
      >
        <SelectValue />
        <ChevronDown />
      </SelectPrimitive.Trigger>
      <SelectContent open={open} position="popper">
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.caption}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectFilter;
