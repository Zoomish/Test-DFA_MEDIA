"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movie.module.scss";
import { Carousel } from "antd";
import { BASE_URL_IMG } from "@/utils/const";
import { TMovieShort } from "@/utils/typesFromBackend";
import { setMoviesState } from "@/redux/movieSlice/movieSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MovieCardList from "@/components/MovieCardList/MovieCardList";
import { getFromCache } from "@/utils/helper";

export default function Movies() {
  const dispatch = useAppDispatch();
  const { isPending, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      const cache = getFromCache(`movies`);
      if (cache) {
        return cache;
      }
      movieAPI
        .getMovies()
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setMoviesState(res)));
    },
  });
  const movies = useAppSelector((state) => state.movies.movies);
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <Carousel
        autoplay
        dotPosition="left"
        dots={false}
        infinite
        autoplaySpeed={6000}
        className={styles.carousel}
      >
        {movies.map((movie: TMovieShort) => (
          <div className={styles.carouselel} key={movie.id}>
            <img
              src={BASE_URL_IMG + movie.backdrop_path}
              className={styles.imgBackground}
              alt={movie.title}
            />
            <img
              src={BASE_URL_IMG + movie.backdrop_path}
              className={styles.img}
              alt={movie.title}
            />
            <p className={styles.text_title}>{movie.title}</p>
            <p className={styles.text_date}>
              {movie.release_date} &nbsp;&nbsp;&nbsp;&nbsp;
              {Math.floor(movie.vote_average * 100) / 100}★
            </p>
            <p className={styles.text_overview}>{movie.overview}</p>
          </div>
        ))}
      </Carousel>
      <MovieCardList />
    </div>
  );
}
