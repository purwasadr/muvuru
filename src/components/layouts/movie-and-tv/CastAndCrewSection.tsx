import Button from '@/components/ui/Button';
import CardCredit from '@/components/ui/CardCredit';
import { Cast } from '@/types';

interface Props {
  className?: string;
  casts?: Cast[];
}

const CastAndCrewSection = ({casts, className}: Props) => {
  return (
      <div className={className}>
        <h2>Cast and Crew</h2>
        <ul className='space-y-4 mt-5'>
          {casts?.map((cast) => (
            <CardCredit key={cast.id} credit={cast} />
          ))}
        </ul>
        <Button className="mt-2 mx-auto" intent="text">View All</Button>
      </div>
  );
}

export default CastAndCrewSection;