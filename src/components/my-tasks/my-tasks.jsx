import cn from 'classnames';
import { Task } from 'components/task';
import add from 'images/add.png';

export function MyTasks() {
  return (
    <>
      <section>
        <h1>Мої задачі</h1>
      </section>
      <section className="taskList">
        <div className="task addTask">
          <div className="taskName">
            <div className="static">
              <img src={add} alt="add" />
            </div>
            <input
              type="text"
              className="addTaskInput"
              placeholder="Додати задачу"
            />
          </div>
          <div className="options">
            <button className={cn('addButton')}>Додати задачу</button>
          </div>
        </div>
        <Task />
      </section>
    </>
  );
}
