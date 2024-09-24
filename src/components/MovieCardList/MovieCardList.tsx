import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MovieCard from "../MovieCard/MovieCard";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCardList.module.scss";
import * as movieAPI from "@/utils/api/movie-api";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { setSearchedMoviesState } from "@/redux/movieSlice/movieSlice";

export default function MovieCardList() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const { error } = useQuery({
    queryKey: ["searchedMovies", search],
    enabled: !!search,
    queryFn: () => {
      return movieAPI
        .getSearchMovies(search)
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setSearchedMoviesState(res)));
    },
  });
  const filteredMovies = useAppSelector((state) => state.movies.filteredMovies);
  const searchedMovies = useAppSelector((state) => state.movies.searchedMovies)

  const movies =
    search !== ""
      ? searchedMovies
      : filteredMovies
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
