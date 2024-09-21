"use client";
import { useAppSelector } from "@/redux/hooks";
import { usePathname } from "next/navigation";
export default function Home() {
  const router = usePathname().split("/");
  const id = router[router.length - 1];
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <div>
      <p>Film: {authState}</p>
    </div>
  );
}
