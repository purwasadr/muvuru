import {MOVIEDB_API_KEY_V3, MOVIEDB_API_URL} from '@/constants/env';
import {Movie, ResponseList, Tv} from '@/types';
import { toShow, toShows } from '@/utils/mapper';
import axios from 'axios';

const getTrending = async (mediaType: 'all' | 'movie' | 'tv' | 'person' = 'all') => {
  const {data} = await axios.get<ResponseList<Movie | Tv>>(
    `${MOVIEDB_API_URL}/3/trending/${mediaType}/day?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return  {
    ...data,
    results: toShows(data.results)
  };
};

export {getTrending};