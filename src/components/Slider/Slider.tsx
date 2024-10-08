"use client";
import styles from "./slider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BASE_URL_IMG } from "@/utils/const";
import { TMovieShort } from "@/utils/typesFromBackend";
import { useAppSelector } from "@/redux/hooks";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function Slider() {
  const movies = useAppSelector((state) => state.movies.movies);
  return (
    movies.length > 0 && (
      <Carousel
        axis="vertical"
        autoPlay={true}
        infiniteLoop
        interval={6000}
        className={styles.carousel}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        {movies.map((movie: TMovieShort) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
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
              <div className={styles.text}>
                <p className={styles.text_title}>{movie.title}</p>
                <p className={styles.text_date}>
                  {movie.release_date} &nbsp;&nbsp;&nbsp;&nbsp;
                  {Math.floor(movie.vote_average * 10) / 10}★
                </p>
                <p className={styles.text_overview}>{movie.overview}</p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    )
  );
}
