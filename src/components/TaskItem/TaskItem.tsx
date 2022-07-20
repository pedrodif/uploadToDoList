// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

interface ITaskProps{
  id?: number;
  content?: string;
}

export function TaskItem({ content } : ITaskProps) {
  return (
    <li className={style.taskItem}>
      <div className={style.taskContainer}>
        <input type="radio" />
        <p>
          {content}
        </p>
        <Trash
          className={style.icon}
          size={18}
        />
      </div>
    </li>
  );
}
