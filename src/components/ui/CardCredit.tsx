import { getImageUrl } from '@/constants';
import { Cast, ShowDetail } from '@/types';
import { User } from 'lucide-react';
import Image from 'next/image';

interface Props {
  credit: Pick<Cast, 'profile_path' | 'name' | 'character'>;
}

const CardCredit = ({ credit: { profile_path, name, character } }: Props) => {
  return (
    <li className="relative flex space-x-4">
      {profile_path ? (
        <Image
          className="object-cover rounded-full w-[55px] h-[55px]"
          height={55}
          width={55}
          src={getImageUrl(200, profile_path ?? '')}
          alt={name ?? ''}
        />
      ) : (
        <div className="bg-slate-400 rounded-full w-[55px] h-[55px] flex items-center justify-center">
          <User className="h-[40%] w-[40%]" />
        </div>
      )}
      <div className="flex flex-col justify-center space-y-1 flex-1">
        <h4 className="line-clamp-1">{name}</h4>
        <p className="text-secondary line-clamp-1">{character}</p>
      </div>
    </li>
  );
};

export default CardCredit;
