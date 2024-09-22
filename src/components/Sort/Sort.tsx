"use client";
import Link from "next/link";
import styles from "./header.module.scss";
import { SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchState } from "@/redux/seachSlice/searchSlice";
import { Input } from "antd";
export default function Sort() {
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch();
  const debouncedFilter = useDebounce(filter, 500);
  const handleFilterChange = (e: { target: { value: SetStateAction<string>; }; }) => {
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
