"use client";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCard.module.scss";
import { BASE_URL_IMG } from "@/utils/const";

export default function MovieCard(movie: TMovieShort) {
  return (
    <div key={movie.id} className={styles.movieCard}>
      <img src={BASE_URL_IMG + movie.poster_path} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
}
