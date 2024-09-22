import { TCountry, TMovieFull } from "@/utils/typesFromBackend";
import styles from "./movie.module.scss";
import { useAppSelector } from "@/redux/hooks";
import { BASE_URL_IMG } from "@/utils/const";

export default function MovieFull() {
  const movie = useAppSelector((state) => state.movies.movie);

  return (
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
        <p>Год производства: {movie.release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
}
