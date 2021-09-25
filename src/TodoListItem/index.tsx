import React from "react";
import styles from "./index.module.css";

type ToggleTodo = (selectedTodo: Todo) => void;

export type Todo = {
  text?: string;
  complete: boolean;
  date: string;
  time: string;
};

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const TodoListItem = ({ todo, toggleTodo }: Props) => {
  return (
    <li className={styles.todoListItem}>
      <label className={todo.complete ? styles.todoListItemDone : ""}>
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
      <div className={styles.date}>
        <span>{todo.date}</span>
        <span>{todo.time}</span>
      </div>
    </li>
  );
};

export default TodoListItem;
