"use client";

import styles from "./filter.module.scss";
import { Popover } from "antd";

export default function Filter() {
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
  return (
    <div className={styles.filter}>
      <Popover content={content} title="Title" trigger="click" className={styles.button}>
        <p>Фильтры: </p>
      </Popover>
    </div>
  );
}
