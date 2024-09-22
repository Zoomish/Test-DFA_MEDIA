import styles from "./actors.module.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { TActor } from "@/utils/typesFromBackend";
import { BASE_URL_IMG } from "@/utils/const";
import { useAppSelector } from "@/redux/hooks";

export default function Actors() {
  const movie = useAppSelector((state) => state.movies.movie);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite ssr arrows={false}>
      {movie.actors.map((actor: TActor) => {
        return (
          <div key={actor.id}>
            <img src={BASE_URL_IMG + actor.profile_path} alt="" />
            <p>{actor.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
}
