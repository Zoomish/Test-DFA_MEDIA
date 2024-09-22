"use client";
import { useAppDispatch } from "@/redux/hooks";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import * as movieAPI from "@/utils/api/movie-api";
import { setMovieState } from "@/redux/movieSlice/movieSlice";
import { getFromCache } from "@/utils/helper";
import Loader from "@/components/Loader/Loader";
import MovieFull from "@/components/MovieFull/MovieFull";
import styles from "./movie.module.scss";
import { TMovieFull } from "@/utils/typesFromBackend";

export default function Movie() {
  const queryClient = useQueryClient();
  const router = usePathname().split("/");
  const id = router[router.length - 1];
  const dispatch = useAppDispatch();
  const { isPending, error } = useQuery({
    queryKey: [`movie/${id}`],
    queryFn: () => {
      const cache = getFromCache(`movie/${id}`, queryClient);
      if (cache) return cache;
      return movieAPI
        .getMovie(+id)
        .then((res: TMovieFull) => dispatch(setMovieState(res)));
    },
  });

  if (isPending) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <MovieFull></MovieFull>
    </div>
  );
}
