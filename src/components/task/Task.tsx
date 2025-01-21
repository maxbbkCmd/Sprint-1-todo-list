type TaskProps = {
  title: string;
  isDone: boolean;
  key: number;
};

export const Task = ({ title, isDone, key }: TaskProps) => {
  return (
    <li key={key}>
      <input type='checkbox' checked={isDone} /> <span>{title}</span>
    </li>
  );
};
