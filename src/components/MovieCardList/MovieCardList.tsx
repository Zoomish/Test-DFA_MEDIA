"use client";
import { useAppSelector } from "@/redux/hooks";
import MovieCard from "../MovieCard/MovieCard";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCardList.module.scss";

export default function MovieCardList({}) {
  const movies = useAppSelector((state) => state.movies.movies);
  return (
    <div className={styles.container}>
      {movies.map((movie: TMovieShort) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
