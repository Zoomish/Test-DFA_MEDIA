"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchState } from "@/redux/seachSlice/searchSlice";
import { Input } from "antd";
export default function Header() {
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch();
  const debouncedFilter = useDebounce(filter, 500);
  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    dispatch(setSearchState(debouncedFilter));
  }, [debouncedFilter]);
  return (
    <div className={styles.header}>
      <Link href={"https://github.com/Zoomish"} className={styles.a}>
        Zoomish
      </Link>
      <div className={styles.links}>
        <Input onChange={handleFilterChange} placeholder="Search" />
        <Link href={"/movie"} className={styles.a}>
          Movies
        </Link>
      </div>
    </div>
  );
}
