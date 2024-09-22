import { TActor, TCountry } from "@/utils/typesFromBackend";
import styles from "./movie.module.scss";
import "react-multi-carousel/lib/styles.css";
import { useAppSelector } from "@/redux/hooks";
import { BASE_URL_IMG } from "@/utils/const";
import Carousel from "react-multi-carousel";

export default function MovieFull() {
  const movie = useAppSelector((state) => state.movies.movie);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
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
      <p>Актеры: </p>
      <div>
        <Carousel responsive={responsive} infinite ssr arrows={false}>
          {movie.actors.map((actor: TActor) => {
            return (
              <div key={actor.id}>
                <img src={BASE_URL_IMG + actor.profile_path} alt="" />
                <p>{actor.name}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
