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
      breakpoint: { min: 0, max: 10000 },
      items: availableScreenWidth / 180,
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
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";
              }}
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
