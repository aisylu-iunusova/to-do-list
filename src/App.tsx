import React, { useState } from "react";
import styles from "./App.module.css";
import TodoListItem, { Todo } from "./TodoListItem";
import AddTodoForm, { AddTodo } from "./AddTodoForm";

const initialTodos: Todo[] = [
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

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodoList = todos.map((item) => {
      if (item === selectedTodo) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });

    setTodos(newTodoList);
  };

  const addTodo: AddTodo = (text) => {
    if (text) {
      return setTodos([...todos, { text, complete: false }]);
    }
  };

  return (
    <>
      <div className={styles.toDoList}>
        {todos.map((item) => (
          <TodoListItem todo={item} toggleTodo={toggleTodo} />
        ))}
        <AddTodoForm addTodo={addTodo} />
      </div>
    </>
  );
};

export default App;
