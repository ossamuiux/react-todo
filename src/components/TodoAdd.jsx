import { useRef, useState } from 'react';
import styles from './TodoAdd.module.css';

export default function TodoAdd({ todos, setTodos }) {
  const inputRef = useRef(null);
  const [nextId, setNextId] = useState(0);

  function handleAddTodo() {
    // 입력필드에 값이 있을 경우 실행
    if (inputRef.current.value.trim()) {
      setNextId(nextId + 1);
      setTodos([...todos, { id: nextId, text: inputRef.current.value, done: false }]);
    }
    inputRef.current.value = '';
  }
  console.log(todos);

  function handleEnter(e) {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div className={styles.todo_add}>
      <input
        onKeyUp={handleEnter}
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요"
        title="할 일을 입력하세요"
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
}
