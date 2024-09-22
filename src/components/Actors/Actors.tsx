import styles from "./actors.module.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { TActor } from "@/utils/typesFromBackend";
import { BASE_URL_IMG } from "@/utils/const";
import { useAppSelector } from "@/redux/hooks";

export default function Actors() {
  const movie = useAppSelector((state) => state.movies.movie);
  const availableScreenWidth = window.innerWidth;
  console.log(availableScreenWidth);

  const responsive = {
    desktop: {
      breakpoint: { min: 0, max: 3000 },
      items: availableScreenWidth/180,
    },
  };
  return (
    <Carousel responsive={responsive} infinite ssr arrows={false}>
      {movie.actors.map((actor: TActor) => {
        return (
          <div key={actor.id} className={styles.actor}>
            <img
              draggable={false}
              className={styles.img}
              src={BASE_URL_IMG + actor.profile_path}
              alt={actor.name}
            />
            <div className={styles.text}>
              <p className={styles.firstLine}>{actor.name}</p>
              <p className={styles.secondLine}>{actor.character}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
