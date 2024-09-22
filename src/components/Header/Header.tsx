"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
export default function Header() {
  const [filter, setFilter] = useState(undefined);
  const debouncedFilter = useDebounce(filter, 500);
  return (
    <div className={styles.header}>
      <Link href={"https://github.com/Zoomish"} className={styles.a}>
        Zoomish
      </Link>
      <div className={styles.links}>
        <Link href={"/movie"} className={styles.a}>
          Movies
        </Link>
        <Link href={"/user/sign-up"} className={styles.a}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
