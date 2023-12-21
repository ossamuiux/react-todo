import styles from './TodoList.module.css';
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, setTodos }) {
  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}
