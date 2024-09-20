"use client"
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  return (
    <div>
      <p>Post: {router.query.slug}</p>
    </div>
  );
}
export default Home;
