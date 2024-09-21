"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movie.module.scss";
import { Carousel } from "antd";
import { BASE_URL_IMG } from "@/utils/const";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => movieAPI.getMovies().then((res) => res.results),
  });
  if (isPending) return "Loading...";
  console.log(data);

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <Carousel  dotPosition="left" dots={false} infinite autoplaySpeed={6000} className={styles.carousel}>
        {data.map((movie: any)=> (
          <div className={styles.carouselel} key={movie.id}>
            <img src={BASE_URL_IMG + movie.backdrop_path} className={styles.img} alt={movie.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
