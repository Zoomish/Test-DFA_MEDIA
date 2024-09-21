"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movie.module.scss";
import { Carousel } from "antd";
import { BASE_URL_IMG } from "@/utils/const";
import { TMovieShort } from "@/utils/typesFromBackend";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      movieAPI
        .getMovies()
        .then((res) => res.results)
        .then((res: TMovieShort[]) => res),
  });
  if (isPending) return "Loading...";
  console.log(data);

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
        {data.map((movie: TMovieShort) => (
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
    </div>
  );
}
