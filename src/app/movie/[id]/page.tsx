"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import * as movieAPI from "@/utils/api/movie-api";
import { setMovieState } from "@/redux/movieSlice/movieSlice";

export default function Home() {
  const router = usePathname().split("/");

  const dispatch = useAppDispatch();

  const id = router[router.length - 1];

  const authState = useAppSelector((state) => state.auth.authState);

  const { isPending, error, data } = useQuery({
    queryKey: ["movie"],
    queryFn: () => movieAPI.getMovie(+id).then((res) => res),
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <p>Film: {authState}</p>
      <button onClick={() => dispatch(setMovieState(data))}>Click</button>
    </div>
  );
}
