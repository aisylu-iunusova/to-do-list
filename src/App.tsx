import React, { useState } from "react";
import styles from "./App.module.css";
import TodoListItem, { Todo } from "./components/TodoListItem";
import AddTodoForm, { AddTodo } from "./components/AddTodoForm";

const initialTodos: Todo[] = [
  {
    text: "Cook the dinner",
    complete: false,
    date: "25.09.2021",
    time: "7:42",
  },
  {
    text: "Read the manga",
    complete: true,
    date: "8.14.2020",
    time: "7:42",
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
      const date = new Date().toLocaleDateString();
      const time = new Date().toLocaleTimeString().slice(0, -3);
      return setTodos([...todos, { text, complete: false, date, time }]);
    }
  };

  const removeTodo = (delTodo: Todo) => {
    todos.splice(todos.indexOf(delTodo), 1);
    return setTodos(todos);
  };

  return (
    <>
      <div className={styles.toDoList}>
        {todos.map((item) => (
          <TodoListItem
            todo={item}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
        <AddTodoForm addTodo={addTodo} />
      </div>
    </>
  );
};

export default App;
