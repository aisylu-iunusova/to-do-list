import React from "react";
import styles from "./index.module.css";
import DelIcon from "../../assets/icon/delete-icon.svg";

type ToggleTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (delTodo: Todo) => void;

export type Todo = {
  text?: string;
  complete: boolean;
  date: string;
  time: string;
};

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
};

const TodoListItem = ({ todo, toggleTodo, removeTodo }: Props) => {
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
        <img
          className={styles.delBtn}
          src={DelIcon}
          alt="Delete"
          onClick={() => {
            removeTodo(todo);
          }}
        />
      </label>
      <div className={styles.date}>
        <span>{todo.date}</span>
        <span>{todo.time}</span>
      </div>
    </li>
  );
};

export default TodoListItem;
