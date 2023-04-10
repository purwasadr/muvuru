import { movieGenre } from '@/constants';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const getOnFulfilled = <T>(pro: PromiseSettledResult<T>) => {
  return pro.status === 'fulfilled' ? pro.value : undefined;
};

function isString(str: any) {
  return typeof str === 'string' ? str : undefined;
}

export function getOrElse <T> (a: T, func: () => void) {
  if (a) {
    return a
  }
  func()
} 

export function toNumber(str?: string) {
  return str ? Number.parseInt(str) : undefined;
}

export function minuteToText(totalMinutes?: number) {
  if (!totalMinutes) {
    return undefined;
  }

  const hours = Math.floor(totalMinutes / 60);          
  const minutes = totalMinutes % 60;

  return (hours > 0) ? `${hours}h ${minutes}m` : `${minutes}m` 
}

export function getMovieGenre(id: number) {
  return movieGenre.find((genre) => genre.id === id);
}

export function getMovieGenreFromIds(genres?: number[]) {
  if(!genres) return undefined

  const result = genres?.map((id) => getMovieGenre(id)?.name ?? '');

  return arrayToString(result);
}

export function arrayToString(arr: string[] | undefined) {
  if (!arr) return undefined;

  let txt: string = '';
  arr.forEach((value, index) => {
    if (index === 0) {
      txt = value;
    } else if (index === arr.length - 1) {
      txt = txt + ', and ' + value
    } else {
      txt = `${txt}, ${value}`
    }
  });
  return txt;
}

export const getDateShort = (dateString?: string) => {
  if (!dateString) return undefined;

  const date = new Date(dateString);

  return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      formatMatcher: 'basic'
  });
};

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export { getOnFulfilled, isString };
