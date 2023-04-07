import { MOVIEDB_API_KEY_V3, MOVIEDB_API_URL } from '@/constants/env';
import {
  Movie,
  MovieDetail,
  ResponseList,
  Show,
  ShowCredit,
} from '@/types';
import axios from 'axios';

export const getPopularMovies = async (page: number = 1) => {
  const { data } = await axios.get<ResponseList<Movie>>(
    `${MOVIEDB_API_URL}/3/movie/popular?api_key=${MOVIEDB_API_KEY_V3}&language=en-US&page=${page}`
  );
  return data;
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get<ResponseList<Movie>>(
    `${MOVIEDB_API_URL}/3/trending/movie/day?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return data;
};

export const getMoviesDiscover = async (
  page: number = 1,
  sortBy: string = 'popularity.desc'
) => {
  const { data } = await axios.get<ResponseList<Movie>>(
    `${MOVIEDB_API_URL}/3/discover/movie?api_key=${MOVIEDB_API_KEY_V3}&page=${page}&sort_by=${sortBy}`
  );
  return data;
};

export const getMovieDetail = async (id: number) => {
  const { data } = await axios.get<MovieDetail>(
    `${MOVIEDB_API_URL}/3/movie/${id}?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return data;
};

export const getMovieCredit = async (id: number) => {
  const { data } = await axios.get<ShowCredit>(
    `${MOVIEDB_API_URL}/3/movie/${id}/credits?api_key=${MOVIEDB_API_KEY_V3}`
  );
  return data;
};

export const getSearchMovies = async (query: string, page: number = 1) => {
  const { data } = await axios.get<ResponseList<Movie>>(
    `${MOVIEDB_API_URL}/3/search/movie?api_key=${MOVIEDB_API_KEY_V3}&query=${query}&page=${page}&include_adult=false`
  );
  return data;
};

export const getUpcomingMovies = async (page: number = 1) => {
  const { data } = await axios.get<ResponseList<Movie>>(
    `${MOVIEDB_API_URL}/3/movie/upcoming?api_key=${MOVIEDB_API_KEY_V3}&page=${page}`
  );
  return data;
};
