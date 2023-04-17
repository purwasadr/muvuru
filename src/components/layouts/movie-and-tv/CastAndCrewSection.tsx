import CaCreDialog from '@/components/layouts/movie-and-tv/CaCreDialog';
import CardCredit from '@/components/ui/CardCredit';
import { Cast } from '@/types';

interface Props {
  className?: string;
  casts?: Cast[];
}

const CastAndCrewSection = ({ casts, className }: Props) => {
  return (
    <div className={className}>
      <h2>Cast and Crew</h2>
      <ul className='mt-5 space-y-4'>
        {casts?.slice(0, 5).map((cast) => (
          <CardCredit key={cast.id} credit={cast} />
        ))}
      </ul>
      <CaCreDialog className='mx-auto mt-2' casts={casts} />
    </div>
  );
};

export default CastAndCrewSection;
