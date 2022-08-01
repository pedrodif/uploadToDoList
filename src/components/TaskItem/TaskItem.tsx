// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

// Interfaces
interface ITaskProps {
  key: number;
  id: number;
  content: string;
  isComplete?: boolean;
  onDeleteTaskItem: (id: number) => void;
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
          isComplete ? style.completed : style.notCompleted
        }`}
      >
        <div
          className={style.checkboxContainer}
        >
          <input
            type="checkbox"
            id={id.toString()}
            onClick={() => handleToggleTaskCompletion(id)}
            value={content}
          />
          <label
            htmlFor={id.toString()}
            className={style.checkmark}
          >
          </label>
        </div>

        <p className={style.textcompleted}>{content}</p>
        <Trash
          className={style.icon}
          size={18}
          onClick={() => handleDeleteTaskItem(id)}
        />
      </div>
    </li>
  );
}
