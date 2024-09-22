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
}

export interface TGenres {
  id: number;
  name: string;
}

export interface TCountry {
  iso_3166_1: string
  name: string
}