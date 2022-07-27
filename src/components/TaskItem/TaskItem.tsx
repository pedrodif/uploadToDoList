// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

interface ITaskProps{
  key: number;
  id: number;
  content: string;
  onDeleteTaskItem: (key: number) => void;
  isComplete: boolean;
}

export function TaskItem({ key, id, content, onDeleteTaskItem, isComplete} : ITaskProps) {
  function handleDeleteTaskItem(id : number) {
    onDeleteTaskItem(id);
  }

  return (
    <li key={key} className={style.taskItem}>
      <div className={`${style.taskContainer} ${style.isComplete? 'completed' : ''}`}>
        <input
          className={style.checkbox}
          type="checkbox"
          // checked={isComplete}
        />
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
