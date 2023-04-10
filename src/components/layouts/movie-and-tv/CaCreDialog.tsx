import Button from '@/components/ui/Button';
import CardCredit from '@/components/ui/CardCredit';
import {
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from '@/components/ui/Dialog';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Cast } from '@/types';
import { cn } from '@/utils';

interface Props {
  className?: string;
  casts?: Cast[];
}

const CaCreDialog = ({ casts, className }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild><Button className={cn(className)} intent="text">View All</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cast and Crew</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[50vh]">
          <ul className="space-y-4">
            {casts?.map((cast) => (
              <CardCredit key={cast.id} credit={cast} />
            ))}
          </ul>
        </ScrollArea>
        {/* </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default CaCreDialog;
