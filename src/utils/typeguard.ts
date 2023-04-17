import { Movie, MovieDetail, Tv, TvDetail } from '@/types';

function isMovie(show: Movie | Tv): show is Movie {
  return (
    (show as Tv).name === undefined && (show as Tv).first_air_date === undefined
  );
}

function isTv(show: Movie | Tv): show is Tv {
  return (
    (show as Tv).name !== undefined ||
    (show as Tv).first_air_date !== undefined ||
    (show as Tv).original_name !== undefined
  );
}

function isTvDetail(show: MovieDetail | TvDetail): show is TvDetail {
  return (
    (show as Tv).name !== undefined || (show as Tv).original_name !== undefined
  );
}

function isMovieDetail(show: MovieDetail | TvDetail): show is MovieDetail {
  return (
    (show as TvDetail).name === undefined &&
    (show as Tv).original_name === undefined
  );
}
export { isMovie, isTv, isTvDetail, isMovieDetail };
