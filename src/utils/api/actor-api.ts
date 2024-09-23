import { BASE_URL } from "../const";

export const getActors = async (id: number) => {
  return await fetch(`${BASE_URL}/movie/${id}/credits?language=ru-RU`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  }).then((res) => res.json());
};
