// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

interface ITaskProps {
  key: number;
  id: number;
  content: string;
  isComplete: boolean;
  onDeleteTaskItem: (key: number) => void;
  onToggleChange: (id: number) => void;
}

export function TaskItem({
  key,
  id,
  content,
  isComplete,
  onDeleteTaskItem,
  onToggleChange,
}: ITaskProps) {
  // Functions
  function handleDeleteTaskItem(id: number) {
    onDeleteTaskItem(id);
  }

  function handleToggleTaskCompletion(id: number) {
    onToggleChange(id);
  }

  // Render
  return (
    <li key={key} className={style.taskItem}>
      <div
        className={`${style.taskContainer} ${
          isComplete ? style.completed : ""
        }`}
      >
        <label className={style.checkboxContainer}>
          <input
            type="checkbox"
            checked={isComplete}
            onClick={() => handleToggleTaskCompletion(id)}
          />
          <span className={style.checkmark}></span>
        </label>

        <p>{content}</p>
        <Trash
          className={style.icon}
          size={18}
          onClick={() => handleDeleteTaskItem(id)}
        />
      </div>
    </li>
  );
}
