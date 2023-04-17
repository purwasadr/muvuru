import { ShowDetail } from '@/types';
import { arrayToString } from '@/utils';

interface Props {
  showDetail: Pick<
    ShowDetail,
    'genres' | 'spoken_languages' | 'status' | 'revenue'
  >;
}

const DetailsSection = ({ showDetail }: Props) => {
  const { genres, spoken_languages, status, revenue } = showDetail;

  return (
    <div className='mt-8'>
      <h2>Details</h2>
      <table className='mt-5 w-full max-w-[600px] table-auto text-left '>
        <colgroup>
          <col className='w-[45%] md:w-[35%]' />
          <col className='w-[55%] md:w-[65%]' />
        </colgroup>
        <tbody>
          <tr className='border-b border-slate-700'>
            <th scope='row' className='py-3 pr-3 font-medium'>
              Genres
            </th>
            <td className='py-2 text-secondary'>
              <ul className='flex flex-wrap gap-2'>
                {genres?.map((genre) => (
                  <li
                    className='rounded-full bg-slate-700 px-3 py-1 text-xs'
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
          <tr className='border-b border-slate-700'>
            <th scope='row' className='py-3 pr-3 font-medium'>
              Spoken Languages
            </th>
            <td className='py-3 text-secondary'>
              {arrayToString(
                showDetail.spoken_languages?.map((value) => value.name ?? 'N/A')
              ) || '-'}
            </td>
          </tr>
          <tr className='border-b border-slate-700'>
            <th scope='row' className='py-3 pr-3 font-medium'>
              Status
            </th>
            <td className='py-3 text-secondary'>{showDetail.status}</td>
          </tr>
          <tr className='border-b border-slate-700'>
            <th scope='row' className='py-3 pr-3 font-medium'>
              Revenue
            </th>
            <td className='py-3 text-secondary'>
              {revenue ? `$ ${revenue?.toLocaleString()}.00` : '-'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsSection;
