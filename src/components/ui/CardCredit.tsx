import { getImageUrl } from '@/constants';
import { Cast, ShowDetail } from '@/types';
import Image from 'next/image';

interface Props {
  credit: Pick<Cast, 'profile_path' | 'name' | 'character'>
}

const CardCredit = ({credit: {profile_path, name, character}}: Props) => {
  return (
    <article className="flex space-x-4">
      <Image className="object-cover rounded-full w-[55px] h-[55px]" height={55} width={55} src={getImageUrl(200, profile_path ?? '')} alt={name ?? ''} />
      <div className="flex flex-col justify-center space-y-1 flex-1">
        <h4 className="">{name}</h4>
        <p className="text-secondary">{character}</p>
      </div>
    </article>
  );
}

export default CardCredit;