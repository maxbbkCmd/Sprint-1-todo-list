import { Button } from "../button/Button";
import { Task } from "../task/Task";

const tasksData = [
  { title: "Maxim - JS", isBolean: true, id: 1 },
  { title: "Sveta - React", isBolean: false, id: 2 },
  { title: "Arina - HTML", isBolean: false, id: 3 },
];

export const Tasks = () => {
  const mappedTasks = tasksData.map((task) => {
    return <Task title={task.title} isDone={task.isBolean} key={task.id} />;
  });

  return (
    <div>
      <h3>What to learn</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>{mappedTasks}</ul>
      <div>
        <Button title={"Click me"} />
        <Button title={"Click HE"} />
        <Button title={"Click UP"} />
      </div>
    </div>
  );
};
