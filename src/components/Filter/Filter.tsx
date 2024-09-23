"use client";

import { Popover } from "antd";

export default function Filter() {
    const content = (
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      );
  return (
    <div>
      <Popover content={content} title="Title" trigger="click">
        <p>Фильтры: </p>
      </Popover>
    </div>
  );
}
