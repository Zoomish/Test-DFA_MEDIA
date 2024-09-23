"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movies.module.scss";
import { TMovieShort } from "@/utils/typesFromBackend";
import { setMoviesState } from "@/redux/movieSlice/movieSlice";
import { useAppDispatch } from "@/redux/hooks";
import MovieCardList from "@/components/MovieCardList/MovieCardList";
import Loader from "@/components/Loader/Loader";
import Slider from "@/components/Slider/Slider";
import Filter from "@/components/Filter/Filter";

export default function Movies() {
  const dispatch = useAppDispatch();
  const { isPending, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return movieAPI
        .getMovies()
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setMoviesState(res)));
    },
  });
  if (isPending) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <Slider />
      <Filter />
      <MovieCardList />
    </div>
  );
}
