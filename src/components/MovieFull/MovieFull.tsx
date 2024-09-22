import { TCountry } from "@/utils/typesFromBackend";
import styles from "./movie.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { BASE_URL_IMG } from "@/utils/const";
import Actors from "../Actors/Actors";

export default function MovieFull() {
  const movie = useAppSelector((state) => state.movies.movie);
  return (
    <>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <img
            src={BASE_URL_IMG + movie.poster_path}
            alt={movie.title}
            className={styles.img}
          />
        </div>
        <div className={styles.text}>
          <h1>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h1>
          <p className={styles.original_title}>{movie.original_title}</p>
          <div className={styles.info}>
            <p>Год производства: {movie.release_date.slice(0, 4)}</p>
            <p>
              Страна производства:{" "}
              {movie.production_countries.map((country: TCountry) => {
                return `${country.name}`;
              })}
            </p>
            <p>
              Жанр:{" "}
              {movie.genres.map((genre) => {
                return `${genre.name}, `;
              })}
            </p>
            <p>Бюджет: {movie.budget.toLocaleString("ru")}</p>
            <p>Рейтинг: {Math.floor(movie.vote_average * 10) / 10}★</p>
            <p>Описание: {movie.overview}</p>
          </div>
        </div>
      </div>
      <p className={styles.actors}>Актеры: </p>
      <div>
        <Actors/>
      </div>
    </>
  );
}
