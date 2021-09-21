import React from "react";
import styles from "./index.module.css";

export type ToDoProps = {
  text?: string;
  complete?: boolean;
};

const TodoListItem: React.FC<ToDoProps> = ({ text, complete }) => {
  return (
    <li className={styles.todoListItem}>
      <label style={{ textDecoration: complete ? "line-through" : undefined }}>
        <input type="checkbox" checked={complete} />
        {text}
      </label>
    </li>
  );
};

export default TodoListItem;
