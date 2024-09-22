"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as movieAPI from "@/utils/api/movie-api";
import styles from "./movie.module.scss";
import { Carousel } from "antd";
import { BASE_URL_IMG } from "@/utils/const";
import { TMovieShort } from "@/utils/typesFromBackend";
import { setMoviesState } from "@/redux/movieSlice/movieSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MovieCardList from "@/components/MovieCardList/MovieCardList";
import { getFromCache } from "@/utils/helper";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import Slider from "@/components/Clider/Clider";

export default function Movies() {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { isPending, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      const cache = getFromCache(`movies`, queryClient);
      if (cache) {
        return cache;
      }
      return movieAPI
        .getMovies()
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setMoviesState(res)));
    },
  });
  if (isPending) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className={styles.container}>
      <Slider />
      <MovieCardList />
    </div>
  );
}
