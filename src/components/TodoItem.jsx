import styles from './TodoItem.module.css';

export default function TodoItem({ todo, todos, setTodos }) {
  // todos배열요소 모두(t)에서 todo.id가 같으면
  // 해당객체의 done을 변경하고
  // todo.id와 같지않은 배열요소는 원래 객체를 리턴
  function handleDone() {
    setTodos(
      todos.map((t) => {
        return t.id === todo.id ? { ...t, done: !t.done } : t;
      })
    );
  }

  // todos배열요소 모두(t)에서 todo.id가 다른 요소로
  // 새로운 배열 생성하여 setTodos로 todos배열 업데이트
  function handleRemove() {
    setTodos(
      todos.filter((t) => {
        return t.id !== todo.id;
      })
    );
  }

  return (
    <li className={styles.todo_item}>
      <input id={`check${todo.id}`} type="checkbox" />
      {/* todo.done이 true면 done클래스 걸고 아니면 빈칸 */}
      <label htmlFor={`check${todo.id}`} onClick={handleDone} className={todo.done === true ? styles.done : ''}>
        {todo.text}
      </label>
      <button type="button" onClick={handleRemove}>
        remove
      </button>
    </li>
  );
}
