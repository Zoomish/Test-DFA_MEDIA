"use client";
import styles from "./actors.module.scss";
import * as actorAPI from "@/utils/api/actor-api";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { TActor } from "@/utils/typesFromBackend";
import { BASE_URL_IMG } from "@/utils/const";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import Loader from "../Loader/Loader";

export default function Actors() {
  const router = usePathname().split("/");
  const id = router[router.length - 1];
  const { isPending, error, data } = useQuery<TActor>({
    queryKey: [`movie/${id}`],
    queryFn: async () => {
      return await actorAPI.getActors(+id).then((res: TActor[]) => res);
    },
  });

  if (isPending) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  const availableScreenWidth = window.innerWidth;
  const responsive = {
    desktop: {
      breakpoint: { min: 0, max: 10000 },
      items: Math.floor(availableScreenWidth / 180),
    },
  };
  return (
    <Carousel responsive={responsive} infinite ssr arrows={false}>
      {data.actors.map((actor: TActor) => {
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
