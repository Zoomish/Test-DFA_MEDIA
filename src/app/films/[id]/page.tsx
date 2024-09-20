"use client";
import { usePathname } from "next/navigation";
export default function Home() {
  const router = usePathname().split("/");
  const id = router[router.length - 1];

  return (
    <div>
      <p>Post: {id}</p>
    </div>
  );
}
