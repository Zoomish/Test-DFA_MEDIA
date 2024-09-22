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

export const getMovie = async (id: number) => {
  const movie = await fetch(`${BASE_URL}/movie/${id}?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
  const actors = await fetch(`${BASE_URL}/movie/${id}/credits?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
  return { ...movie, actors: actors.cast };
};
