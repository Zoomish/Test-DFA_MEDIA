"use client";

import { useEffect } from "react";
import styles from "./filter.module.scss";
import { Button, Form, Input, Popover } from "antd";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IFilterState, setGenreState, setRatingState, setSortState, setYearState } from "@/redux/filterSlice/filterSlice";

export default function Filter() {
  const [form] = Form.useForm();
  const filters = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  useEffect(() => {
    form.setFieldValue("release_year", filters.release_year);
    form.setFieldValue("genre", filters.genre);
    form.setFieldValue("vote_average", filters.vote_average);
  }, []);
  const onFinish = (values: IFilterState): void => {
    dispatch(setYearState(values.release_year));
    dispatch(setGenreState(values.genre));
    dispatch(setSortState(values.sort_by));
    dispatch(setRatingState(values.vote_average));
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
