import React, { useState } from "react";
import styles from "./App.module.css";
import TodoListItem, { ToDoProps } from "./TodoListItem";

const initialTodos: ToDoProps[] = [
  {
    text: "Cook the dinner",
    complete: false,
  },
  {
    text: "Read the manga",
    complete: true,
  },
];
const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className={styles.toDoList}>
      <TodoListItem text={todos[0].text} complete={todos[0].complete} />
      <TodoListItem text={todos[1].text} complete={todos[1].complete} />
    </div>
  );
};

export default App;
