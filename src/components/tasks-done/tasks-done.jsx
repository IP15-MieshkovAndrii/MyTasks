import { Task } from 'components/task';

export function TasksDone() {
  return (
    <>
      <section>
        <h1>Виконані задачі</h1>
      </section>
      <section className="doneTaskList">
        <Task />
      </section>
    </>
  );
}
