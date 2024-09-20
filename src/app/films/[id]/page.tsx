"use client"
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <p>Post: {router.query.slug}</p>
    </div>
  );
}
