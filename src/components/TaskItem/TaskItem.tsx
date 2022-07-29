// Style
import style from "./taskItem.module.scss";

// Assets
import { Trash } from "phosphor-react";

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
        <label className={style.checkboxContainer}>
          <input
            placeholder={content}
            type="checkbox"
            onClick={() => handleToggleTaskCompletion(id)}
            value={content}
          />
          <span className={style.checkmark}></span>
        </label>

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
