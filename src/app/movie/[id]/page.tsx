"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import * as movieAPI from "@/utils/api/movie-api";
import { setMovieState } from "@/redux/movieSlice/movieSlice";
import { getFromCache } from "@/utils/helper";

export default function Movie() {
  const router = usePathname().split("/");
  const id = router[router.length - 1];
  const dispatch = useAppDispatch();
  const { isPending, error } = useQuery({
    queryKey: [`movie/${id}`],
    queryFn: () => {
      const cache = getFromCache(`movie/${id}`);
      if (cache) return cache;
      movieAPI.getMovie(+id).then((res) => dispatch(setMovieState(res)));
    },
  });

  const movie = useAppSelector((state) => state.movies.movie);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <p>Film: {JSON.stringify(movie)}</p>
    </div>
  );
}
