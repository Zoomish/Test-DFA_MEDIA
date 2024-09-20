"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";

export default function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => movieAPI.getMovies().then((res) => res.json()),
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return <div>{JSON.stringify(data)}</div>;
}
