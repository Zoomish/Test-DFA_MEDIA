"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchState } from "@/redux/seachSlice/searchSlice";
import { Input } from "antd";
export default function Search() {
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch();
  const debouncedFilter = useDebounce(filter, 500);
  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    dispatch(setSearchState(debouncedFilter));
  }, [debouncedFilter]);
  return <Input onChange={handleFilterChange} placeholder="Search" />;
}
