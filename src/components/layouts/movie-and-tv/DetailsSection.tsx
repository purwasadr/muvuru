import { ShowDetail } from '@/types';
import { arrayToString } from '@/utils';

interface Props {
  showDetail: Pick<ShowDetail, 'genres' | 'spoken_languages' | 'status'>;
}

const DetailsSection = ({ showDetail }: Props) => {
  const { genres, spoken_languages, status } = showDetail

  return (
    <div className="mt-8">
      <h2>Details</h2>
      <table className="mt-5 table-auto w-full max-w-[600px] text-sm text-left ">
        <colgroup>
          <col className="w-[45%] md:w-[35%]" />
          <col className="w-[55%] md:w-[65%]"/>
        </colgroup>
        <tbody>
          <tr className="border-b border-slate-700">
            <th scope="row" className="py-3 font-medium pr-3">
              Genres
            </th>
            <td className="py-2 text-secondary">
              <ul className="flex flex-wrap gap-2">
                {genres?.map((genre) => (
                  <li className="py-1 px-3 bg-slate-700 text-xs rounded-full" key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-700">
            <th scope="row" className="py-3 font-medium pr-3">
              Spoken Languages
            </th>
            <td className="py-3 text-secondary">
              {arrayToString(
                showDetail.spoken_languages?.map((value) => value.name ?? 'N/A')
              )}
            </td>
          </tr>
          <tr className="border-b border-slate-700">
            <th scope="row" className="py-3 font-medium pr-3">
              Status
            </th>
            <td className="py-3 text-secondary">{showDetail.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsSection;
