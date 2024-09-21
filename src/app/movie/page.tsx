"use client";
import { useQuery } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movie.module.scss";
import { Carousel } from "antd";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => movieAPI.getMovies().then((res) => res),
  });
  if (isPending) return "Loading...";
  console.log(data);

  if (error) return "An error has occurred: " + error.message;
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className={styles.container}>
      <Carousel autoplay dotPosition="left">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
