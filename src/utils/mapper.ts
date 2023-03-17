import {Movie, MovieDetail, Show, ShowDetail, Tv, TvDetail} from '@/types';
import {isMovie, isMovieDetail, isTv, isTvDetail} from '@/utils/typeguard';

export const toShow = (show: Movie | Tv): Show => {
  if (isTv(show)) {
    return {
      ...show,
      media_type: 'tv',
      release_date: show.first_air_date,
      title: show.name,
      original_title: show.original_name,
    };
  }
  return {
    ...show,
    media_type: 'movie'
  };

};

export const toShows = (shows?: (Movie | Tv)[]): Show[] | undefined =>
  shows?.map((show) => toShow(show));

export const toShowDetail = (showDetail?: MovieDetail | TvDetail): ShowDetail | undefined => {
  if(!showDetail) return undefined;

  if (isTvDetail(showDetail)) {
    return {
      ...showDetail,
      media_type: 'tv',
      title: showDetail.name,
      original_title: showDetail.original_name
    }
  }

  return {
    ...showDetail,
    media_type: 'movie'
  }
}