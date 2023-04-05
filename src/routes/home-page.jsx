import { MyTasks } from 'components/my-tasks';
import { TasksDone } from 'components/tasks-done';

export function HomePage() {
  return (
    <>
      <MyTasks />
      <TasksDone />
    </>
  );
}
