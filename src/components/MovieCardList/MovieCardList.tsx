"use client";
import { useAppSelector } from "@/redux/hooks";
import styles from "./movieCardList.scss";
import { BASE_URL_IMG } from "@/utils/const";

export default function MovieCardList() {
  const movies = useAppSelector((state) => state.movies.movies);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movieCard}>
          <img src={BASE_URL_IMG + movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}
