"use client";
import { SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useAppDispatch } from "@/redux/hooks";
import { setSearchState } from "@/redux/seachSlice/searchSlice";
import { Input } from "antd";
import { usePathname, useRouter } from "next/navigation";
export default function Search() {
  const router = useRouter();
  const location = usePathname().split("/");
  const [filter, setFilter] = useState("");
  const dispatch = useAppDispatch();
  const debouncedFilter = useDebounce(filter, 500);
  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilter(e.target.value);
    if (!isNaN(Number(location[location.length - 1]))) {
      router.push("/movie");
    }
  };
  useEffect(() => {
    dispatch(setSearchState(debouncedFilter));
  }, [debouncedFilter]);
  return <Input onChange={handleFilterChange} placeholder="Search" />;
}
