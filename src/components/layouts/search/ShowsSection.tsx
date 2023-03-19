import CardShow from '@/components/ui/CardShow';
import { Movie, Tv } from '@/types';
import { toShow } from '@/utils/mapper';

interface Props {
  shows?: (Movie | Tv)[];
}

const ShowsSection = ({ shows }: Props) => {
  return (
    <section className="w-full py-6 grid md:grid-cols-[repeat(auto-fit,minmax(0,180px))] grid-cols-[repeat(auto-fit,minmax(0,150px))] md:max-xl:place-content-center gap-x-3 gap-y-4 place-content-center sm:place-content-between">
      {shows?.map((show) => (
        <CardShow key={show.id} show={toShow(show)} />
      ))}
    </section>
  );
};

export default ShowsSection;
