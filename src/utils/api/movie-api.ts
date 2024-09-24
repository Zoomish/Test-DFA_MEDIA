import { BASE_URL } from "../const";
export const getMovies = async () => {
  return await fetch(`${BASE_URL}/discover/movie?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
};

export const getSearchMovies = async (search: string) => {
  return await fetch(
    `${BASE_URL}/search/movie?query=${search}&language=ru-RU`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getFilteredMovies = async (release_year: number, genre: string, sort_by: string, vote_average: number) => {
  return await fetch(
    `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=ru-RU&page=1&primary_release_year=${release_year}&sort_by=${sort_by}&vote_average.gte=${vote_average}&without_genres=${genre}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  ).then((res) => res.json());
};

export const getMovie = async (id: number) => {
  return await fetch(`${BASE_URL}/movie/${id}?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
};
