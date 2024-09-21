import { BASE_URL } from "../const";
export const getMovies = async () => {
  return await fetch(`${BASE_URL}/discover/movie`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then(async (res) => res.json());
};

export const getMovie = async (id: number) => {
  return await fetch(`${BASE_URL}movie/${id}?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then(async (res) => res.json());
};

