// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

export function TaskItem() {
  return (
    <li className={style.taskItem}>
      <div className={style.taskContainer}>
        <input type="radio" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash
          className={style.icon}
          size={18}
        />
      </div>
    </li>
  );
}
