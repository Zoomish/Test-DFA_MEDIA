"use client";

import styles from "./filter.module.scss";
import { Form, Input, Popover } from "antd";

export default function Filter() {
  const content = (
    <Form>
      <Form.Item label="Жанр">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Рейтинг">
        <Input></Input>
      </Form.Item>
      <Form.Item label="Год выпуска">
        <Input></Input>
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
