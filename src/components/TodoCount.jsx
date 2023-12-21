import styles from './TodoCount.module.css';

export default function TodoCount({ todos }) {
  // todos배열요소에서 done값이 true인 요소의 갯수
  const doneCount = todos.filter((t) => {
    return t.done === true;
  }).length;

  return (
    <div className={styles.todo_count}>
      <p>
        완료: {doneCount} / 할 일: {todos.length}
      </p>
    </div>
  );
}
