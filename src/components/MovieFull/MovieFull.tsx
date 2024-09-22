import { TMovieFull } from "@/utils/typesFromBackend";
import styles from "./movie.module.scss";
import { useAppSelector } from "@/redux/hooks";

export default function MovieFull() {
  const movie = useAppSelector((state) => state.movies.movie);

  return <div className={styles.container}></div>;
}
