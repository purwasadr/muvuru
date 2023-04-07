import { MOVIEDB_API_KEY_V3, MOVIEDB_API_URL } from '@/constants/env';
import { ResponseList, ShowCredit, Tv, TvDetail } from '@/types';
import axios from 'axios';

export const getTvDiscover = async (
  page: number = 1,
  sortBy: string = 'popularity.desc'
) => {
  const { data } = await axios.get<ResponseList<Tv>>(
    `${MOVIEDB_API_URL}/3/discover/tv?api_key=${MOVIEDB_API_KEY_V3}&page=${page}&sort_by=${sortBy}`
  );
  return data;
};

export const getTvDetail = async (id: number) => {
  const { data } = await axios.get<TvDetail>(
    `${MOVIEDB_API_URL}/3/tv/${id}?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return data;
}

export const getTvCredit = async (id: number) => {
  const { data } = await axios.get<ShowCredit>(
    `${MOVIEDB_API_URL}/3/tv/${id}/credits?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return data;
}

export const getSearchTv = async (query: string, page: number = 1) => {
  const { data } = await axios.get<ResponseList<Tv>>(
    `${MOVIEDB_API_URL}/3/search/tv?api_key=${MOVIEDB_API_KEY_V3}&query=${query}&page=${page}&include_adult=false`
  );
  return data;
}