"use client";

import styles from "./filter.module.scss";
import { Button, Form, Input, Popover } from "antd";

export default function Filter() {
  const [form] = Form.useForm();
  form.setFieldValue("release_year", new Date().getFullYear());
  const onFinish = (values: any): void => {
    console.log(values);
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
