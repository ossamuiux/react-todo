import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoCount from './components/TodoCount.jsx';
import TodoAdd from './components/TodoAdd.jsx';
import TodoList from './components/TodoList.jsx';

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.app}>
      <h1>Todo List</h1>
      <TodoCount todos={todos} />
      <TodoAdd todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
