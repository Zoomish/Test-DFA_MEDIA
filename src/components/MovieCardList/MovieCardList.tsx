import { useAppSelector } from "@/redux/hooks";
import MovieCard from "../MovieCard/MovieCard";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCardList.module.scss";
import Link from "next/link";

export default function MovieCardList({}) {
  const movies = useAppSelector((state) => state.movies.movies);
  return (
    <div className={styles.container}>
      {movies.map((movie: TMovieShort) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}
