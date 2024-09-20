import { BASE_URL } from "../const";
import "./envConfig.ts";

export const getMovies = async () => {
  console.log(process.env.TOKEN);
  return await fetch(`${BASE_URL}/discover/movie`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  }).then(async (res) => res);
};
