import React, { useState } from "react";
import styles from "./index.module.css";

export type AddTodo = (text: string) => void;

type Props = {
  addTodo: AddTodo;
};

const AddTodoForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        className={styles.formInput}
        type="text"
        value={text}
        placeholder="Next to-do"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className={styles.btn}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
