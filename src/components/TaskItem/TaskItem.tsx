// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

interface ITaskProps {
  key: number;
  id: number;
  content: string;
  onDeleteTaskItem: (key: number) => void;
  isComplete: boolean;
  onToggleChange: (id: number) => void;
}

export function TaskItem({
  key,
  id,
  content,
  onDeleteTaskItem,
  isComplete,
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
          style.isComplete ? "completed" : ""
        }`}
      >
        <label>
          <input
            className={style.checkbox}
            type="checkbox"
            // readOnly
            checked={isComplete}
            onClick={() => handleToggleTaskCompletion(id)}
          />
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
