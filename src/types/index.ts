export interface ResponseList<T> {
  page?:          number;
  results?:       T[];
  total_results?: number;
  total_pages?:   number;
}

export interface Movie {
  id?:                number;
  poster_path?:       string;
  adult?:             boolean;
  overview?:          string;
  release_date?:      Date;
  genre_ids?:         number[];
  original_title?:    string;
  original_language?: string;
  title?:             string;
  backdrop_path?:     string;
  popularity?:        number;
  vote_count?:        number;
  video?:             boolean;
  vote_average?:      number;
}

export interface MovieDetail {
  id?:                    number;
  adult?:                 boolean;
  backdrop_path?:         string;
  belongs_to_collection?: object;
  budget?:                number;
  genres?:                Genre[];
  homepage?:              string;
  imdb_id?:               string;
  original_language?:     string;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  production_companies?:  ProductionCompany[];
  production_countries?:  ProductionCountry[];
  release_date?:          Date;
  revenue?:               number;
  runtime?:               number;
  spoken_languages?:      SpokenLanguage[];
  status?:                string;
  tagline?:               string;
  title?:                 string;
  video?:                 boolean;
  vote_average?:          number;
  vote_count?:            number;
}

export interface ShowCredit {
  id?:   number;
  cast?: Cast[];
  crew?: Cast[];
}

export interface Tv {
  poster_path?:       string;
  popularity?:        number;
  id?:                number;
  backdrop_path?:     string;
  vote_average?:      number;
  overview?:          string;
  first_air_date?:    Date;
  origin_country?:    string[];
  genre_ids?:         number[];
  original_language?: string;
  vote_count?:        number;
  name?:              string;
  original_name?:     string;
}

export interface TvDetail {
  id?:                   number;
  backdrop_path?:        string;
  genres?:               Genre[];
  homepage?:             string;
  original_language?:    string;
  created_by?:           CreatedBy[];
  episode_run_time?:     number[];
  first_air_date?:       Date;
  in_production?:        boolean;
  languages?:            string[];
  last_air_date?:        Date;
  last_episode_to_air?:  LastEpisodeToAir;
  name?:                 string;
  next_episode_to_air?:  null;
  networks?:             Network[];
  number_of_episodes?:   number;
  number_of_seasons?:    number;
  origin_country?:       string[];
  original_name?:        string;
  overview?:             string;
  popularity?:           number;
  poster_path?:          string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  seasons?:              Season[];
  spoken_languages?:     SpokenLanguage[];
  status?:               string;
  tagline?:              string;
  type?:                 string;
  vote_average?:         number;
  vote_count?:           number;
}

export interface Show {
  id?:                number;
  media_type?:        'movie' | 'tv';
  poster_path?:       string;
  adult?:             boolean;
  overview?:          string;
  release_date?:      Date; // from first_air_date to this in tv
  genre_ids?:         number[];
  original_title?:    string; // from original_name to this in tv
  original_language?: string;
  title?:             string; // from name to this in tv
  backdrop_path?:     string;
  popularity?:        number;
  vote_count?:        number;
  video?:             boolean;
  vote_average?:      number;
}

export interface ShowDetail {
  id?:                    number;
  adult?:                 boolean; // Only Movie
  backdrop_path?:         string;
  belongs_to_collection?: object; // Only Movie
  budget?:                number; // Only Movie
  genres?:                Genre[];
  homepage?:              string;
  imdb_id?:               string; // Only Movie
  original_language?:     string;
  original_title?:        string; // Only Movie
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  production_companies?:  ProductionCompany[];
  production_countries?:  ProductionCountry[];
  release_date?:          Date; // Only Movie
  revenue?:               number; // Only Movie
  runtime?:               number; // Only Movie
  spoken_languages?:      SpokenLanguage[];
  status?:                string;
  tagline?:               string; 
  title?:                 string; // Only Movie
  video?:                 boolean; // Only Movie
  vote_average?:          number;
  vote_count?:            number;
  // Below is properties only from tv
  // -------------------------------
  created_by?:           CreatedBy[];
  episode_run_time?:     number[];
  first_air_date?:       Date; // Maybe Can combine to title
  in_production?:        boolean;
  languages?:            string[];
  last_air_date?:        Date;
  last_episode_to_air?:  LastEpisodeToAir;
  // name?:                 string; // Can combine to title
  next_episode_to_air?:  null;
  networks?:             Network[];
  number_of_episodes?:   number;
  number_of_seasons?:    number;
  origin_country?:       string[];
  // original_name?:        string; // Can combine to original_title
  seasons?:              Season[];
  type?:                 string;
  // --------------
  media_type:           'movie' | 'tv';
}

export interface Genre {
  id?:   number;
  name?: string;
}

export interface ProductionCompany {
  id?:             number;
  logo_path?:      string;
  name?:           string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?:       string;
}

export interface SpokenLanguage {
  iso_639_1?: string;
  name?:      string;
}

export interface CreatedBy {
  id?:           number;
  credit_id?:    string;
  name?:         string;
  gender?:       number;
  profile_path?: string;
}

export interface LastEpisodeToAir {
  air_date?:        Date;
  episode_number?:  number;
  id?:              number;
  name?:            string;
  overview?:        string;
  production_code?: string;
  season_number?:   number;
  still_path?:      string;
  vote_average?:    number;
  vote_count?:      number;
}

export interface Network {
  name?:           string;
  id?:             number;
  logo_path?:      null | string;
  origin_country?: string;
}

export interface Season {
  air_date?:      Date;
  episode_count?: number;
  id?:            number;
  name?:          string;
  overview?:      string;
  poster_path?:   string;
  season_number?: number;
}

export interface Cast {
  adult?:                boolean;
  gender?:               number;
  id?:                   number;
  known_for_department?: string;
  name?:                 string;
  original_name?:        string;
  popularity?:           number;
  profile_path?:         string;
  cast_id?:              number;
  character?:            string;
  credit_id?:            string;
  order?:                number;
}

export interface Crew {
  adult?:                boolean;
  gender?:               number;
  id?:                   number;
  known_for_department?: string;
  name?:                 string;
  original_name?:        string;
  popularity?:           number;
  profile_path?:         string;
  credit_id?:            string;
  department?:           string;
  job?:                  string;
}