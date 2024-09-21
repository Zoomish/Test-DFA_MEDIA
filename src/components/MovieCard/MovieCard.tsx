"use client";
import { TMovieShort } from "@/utils/typesFromBackend";
import styles from "./movieCard.module.scss";
import { BASE_URL_IMG } from "@/utils/const";
import { Popover } from "antd";

export default function MovieCard({ movie }: { movie: TMovieShort }) {
  const content = (
    <div>
      <p>{movie.overview}</p>
    </div>
  );
  return (
    <Popover placement="rightTop" content={content} title={movie.title}>
      <div key={movie.id} className={styles.movieCard}>
        <img src={BASE_URL_IMG + movie.poster_path} alt={movie.title} />
        <div className={styles.textContainer}>
          <h5>{movie.title}</h5>
        </div>
      </div>
    </Popover>
  );
}
