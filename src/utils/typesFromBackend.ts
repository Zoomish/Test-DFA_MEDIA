export interface TMovieShort {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMovieFull extends TMovieShort {
  genres: TGenres[];
  belongs_to_collection: Array<number>;
  budget: number;
  homepage: string;
  imdb_id: string;
  production_companies: Array<number>;
  production_countries: TCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: Array<number>;
  status: string;
  tagline: string;
  actors: TActor[];
}

export interface TGenres {
  id: number;
  name: string;
}

export interface TCountry {
  iso_3166_1: string;
  name: string;
}

export interface TActors {
  id: number;
  cast: TActor[];
  crew: TPerson[];
}

export interface TPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface TActor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
