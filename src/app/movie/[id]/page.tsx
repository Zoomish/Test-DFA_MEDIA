"use client";
import { setAuthState } from "@/redux/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
export default function Home() {
  const router = usePathname().split("/");
  const dispatch = useAppDispatch();
  const id = router[router.length - 1];
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <div>
      <p>Film: {authState}</p>
      <button onClick={() => dispatch(setAuthState(!authState))}>Click</button>
    </div>
  );
}
