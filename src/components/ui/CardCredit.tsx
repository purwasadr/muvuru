import { getImageUrl } from '@/constants';
import { Cast } from '@/types';
import { User } from 'lucide-react';
import Image from 'next/image';

interface Props {
  credit: Pick<Cast, 'profile_path' | 'name' | 'character'>;
}

const CardCredit = ({ credit: { profile_path, name, character } }: Props) => {
  return (
    <li className='relative flex space-x-4'>
      {profile_path ? (
        <Image
          className='h-[55px] w-[55px] rounded-full object-cover'
          height={55}
          width={55}
          src={getImageUrl(200, profile_path ?? '')}
          alt={name ?? ''}
        />
      ) : (
        <div className='flex h-[55px] w-[55px] items-center justify-center rounded-full bg-slate-400'>
          <User className='h-[40%] w-[40%]' />
        </div>
      )}
      <div className='flex flex-1 flex-col justify-center space-y-1'>
        <h4 className='line-clamp-1'>{name}</h4>
        <p className='line-clamp-1 text-secondary'>{character}</p>
      </div>
    </li>
  );
};

export default CardCredit;
