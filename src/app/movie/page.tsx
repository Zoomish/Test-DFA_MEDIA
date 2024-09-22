"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movies.module.scss";
import { TMovieShort } from "@/utils/typesFromBackend";
import { setMoviesState } from "@/redux/movieSlice/movieSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MovieCardList from "@/components/MovieCardList/MovieCardList";
import { getFromCache } from "@/utils/helper";
import Loader from "@/components/Loader/Loader";
import Slider from "@/components/Slider/Slider";

export default function Movies() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);

  const { isPending, error } = useQuery({
    queryKey: ["movies", search],
    enabled: !!search,
    queryFn: () => {
      const cache = getFromCache(`movies`, queryClient);
      if (cache) {
        return cache;
      }
      return movieAPI
        .getMovies(search)
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setMoviesState(res)));
    },
  });
  if (isPending) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <Slider />
      <MovieCardList />
    </div>
  );
}
