import CardShow from '@/components/ui/CardShow';
import { Movie, Tv } from '@/types';
import { toShow } from '@/utils/mapper';
import { useRouter } from 'next/router';

interface Props {
  shows?: (Movie | Tv)[];
}

const ShowsList = ({shows}: {shows?: (Movie | Tv)[]}) => {
  const router = useRouter();
  const { query } = router.query;

  if (!query) return <></>;

  if (shows === undefined) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p>Cannot fetch list</p>
      </div>
    );
  }

  if (shows.length <= 0) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p>Cannot found result</p>
      </div>
    )
  }

  return (
    <div className="w-full py-4 md:py-6 grid grid-cols-[repeat(auto-fit,minmax(0,150px))] md:grid-cols-[repeat(auto-fit,minmax(0,180px))] place-items-center gap-4 justify-center place-content-start">
      {shows.map((show) => (
        <CardShow key={show.id} show={toShow(show)} />
      ))}
    </div>
  );
};

const ShowsSection = ({ shows }: Props) => {
  const aww = (<div></div>)

  return (
    <section className="">
      {/* css backup : py-4 md:py-6 grid md:max-xl:place-content-center gap-x-2 gap-y-2 place-content-center sm:place-content-start
       md:grid-cols-[repeat(auto-fit,minmax(0,180px))] grid-cols-[repeat(auto-fit,minmax(0,150px))]
       w-fit py-4 md:py-6 grid min-[370px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 place-items-center gap-4 place-content-start
       w-full py-4 md:py-6 grid max-sm:grid-cols-[repeat(auto-fit,minmax(0,150px))] grid-cols-[repeat(auto-fit,minmax(150px,auto))] place-items-center gap-4 max-sm:place-content-center place-content-start */}
      <ShowsList shows={shows} />
    </section>
  );
};

export default ShowsSection;
