"use client";

import { useEffect } from "react";
import styles from "./filter.module.scss";
import { Button, Form, Input, Popover } from "antd";
import * as movieAPI from "@/utils/api/movie-api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  IFilterState,
  setGenreState,
  setRatingState,
  setSortState,
  setYearState,
} from "@/redux/filterSlice/filterSlice";
import { setSearchState } from "@/redux/seachSlice/searchSlice";
import { useQuery } from "@tanstack/react-query";
import { setFilteredMoviesState } from "@/redux/movieSlice/movieSlice";
import { TMovieShort } from "@/utils/typesFromBackend";

export default function Filter() {
  const [form] = Form.useForm();
  const filters = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    form.setFieldValue("release_year", filters.release_year);
    form.setFieldValue("genre", filters.genre);
    form.setFieldValue("vote_average", filters.vote_average);
    form.setFieldValue("sort_by", filters.sort_by);
  }, []);
  const { error } = useQuery({
    queryKey: ["filteredMovies", filters],
    queryFn: () => {
      return movieAPI
        .getFilteredMovies(
          filters.release_year,
          filters.genre,
          filters.sort_by,
          filters.vote_average
        )
        .then((res) => res.results)
        .then((res: TMovieShort[]) => dispatch(setFilteredMoviesState(res)));
    },
  });
  const onFinish = (values: IFilterState): void => {
    dispatch(setYearState(values.release_year));
    dispatch(setGenreState(values.genre));
    dispatch(setSortState(values.sort_by));
    dispatch(setRatingState(values.vote_average));
    dispatch(setSearchState(""));
  };
  const content = (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="Жанр" name="genre">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Рейтинг" name="vote_average">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Год выпуска" name="release_year">
        <Input></Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  );
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className={styles.filter}>
      <Popover
        content={content}
        title="Фильтры:"
        trigger="click"
        className={styles.button}
      >
        <p>Фильтры: </p>
      </Popover>
    </div>
  );
}
