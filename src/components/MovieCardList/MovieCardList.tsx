import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MovieCard from "../MovieCard/MovieCard";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCardList.module.scss";
import * as movieAPI from "@/utils/api/movie-api";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { setFilteredMoviesState } from "@/redux/movieSlice/movieSlice";

export default function MovieCardList() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const { error } = useQuery({
    queryKey: ["filteredmovies", search],
    enabled: !!search,
    queryFn: () => {
      return movieAPI
        .getSearchMovies(search)
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setFilteredMoviesState(res)));
    },
  });

  const movies =
    search !== ""
      ? useAppSelector((state) => state.movies.filteredmovies)
      : useAppSelector((state) => state.movies.movies);
  if (error) return "An error has occurred: " + error.message;
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
