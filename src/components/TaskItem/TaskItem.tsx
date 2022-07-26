// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

interface ITaskProps{
  key: number;
  id: number;
  content: string;
  onDeleteTaskItem: (key: number) => void;
}

export function TaskItem({ key, id, content, onDeleteTaskItem } : ITaskProps) {
  function handleDeleteTaskItem(id : number) {
    onDeleteTaskItem(id);
  }

  return (
    <li key={key} className={style.taskItem}>
      <div className={style.taskContainer}>
        <input type="radio" />
        <p>
          {content}
        </p>
        <Trash
          className={style.icon}
          size={18}
          onClick={() => handleDeleteTaskItem(id)}
        />
      </div>
    </li>
  );
}
