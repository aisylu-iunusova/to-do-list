import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import TodoListItem, { Todo } from "./components/TodoListItem";
import AddTodoForm, { AddTodo } from "./components/AddTodoForm";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    let toDoList = localStorage.getItem("Todo") || [];
    if (typeof toDoList === "string") {
      setTodos(JSON.parse(toDoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todos));
  }, [todos]);

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
      setTodos([...todos, { text, complete: false, date, time }]);
    }
  };

  const removeTodo = (delTodo: Todo) => {
    todos.splice(todos.indexOf(delTodo), 1);
    setTodos(todos);
  };

  // const removeCheck = (selectedTodo: Todo) => {};

  const removeAll = () => {
    setTodos([]);
    localStorage.removeItem("Todo");
  };

  return (
    <>
      <div className={styles.toDoList}>
        {todos.map((item, index) => (
          <TodoListItem
            todo={item}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={index}
          />
        ))}
        <AddTodoForm addTodo={addTodo} />
        <div className={styles.settings}>
          <button
            className={styles.btnDelAll}
            type="button"
            onClick={removeAll}
          >
            Remove all
          </button>
          {/* <button type="button" onClick={removeCheck}>
          Remove check
        </button> */}
        </div>
      </div>
    </>
  );
};

export default App;
