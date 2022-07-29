// Packages
import { useEffect, useState } from "react";

// Components
import { TaskItem } from "../TaskItem/TaskItem";

// Styles
import style from "./taskList.module.scss";

// Assets
import { PlusCircle } from "phosphor-react";
import { Clipboard } from "../../assets/Clipboard";

// Interfaces
interface ITask {
  id: number;
  content: string;
  isComplete: boolean;
}

export function TaskList() {
  // States
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [createdTasksCount, setCreatedTasksCount] = useState<number>();
  const [finishedTasks, setFinishedTasks] = useState<number>(0);

  // Functions
  function handleCreateNewTask() {
    if (newTaskContent.trim()) {
      const newTask = {
        id: Math.random(),
        content: newTaskContent,
        isComplete: false,
      };
      setTasks((oldState) => [...oldState, newTask]);
    }
    setNewTaskContent("");
  }

  function deleteTaskItem(id: number) {
    const tasksAfterRemoval = tasks.filter((task) => task.id !== id);
    setTasks(tasksAfterRemoval);
  }

  function toggleChange(id: number) {
    const searchId = tasks.findIndex((task) => {
      return task.id === id;
    });
    const updateTasks = [...tasks];
    updateTasks[searchId].isComplete = !updateTasks[searchId].isComplete;
    setTasks(updateTasks);
  }

  function handleStyle() {
    if (showTasksContainer) {
      return style.taskItemsArrangement;
    } else if (showTasksContainerSecondOption) {
      return style.taskItemsArrangementSecondOption;
    } else {
      return style.taskItemsArrangementHidden;
    }
  }

  // Variables
  const showEmptyMessage = tasks.length === 0;
  const showTasksContainer = tasks.length === 1;
  const showTasksContainerSecondOption = tasks.length > 1;

  // Efects
  useEffect(() => {
    // Created tasks count
    let count = tasks.length;
    setCreatedTasksCount(count);

    // Finished tasks count
    const finishedCount = tasks.reduce((total: number, task: ITask) => {
      if(task.isComplete === true){
        return total + 1;
      }else{
        return total;
      }
    }, 0)
    setFinishedTasks(finishedCount);
  }, [tasks]);

  // Render
  return (
    <section className={style.taskListContainer}>
      <header className={style.taskListHeader}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setNewTaskContent(e.target.value)}
          value={newTaskContent}
        />
        <button
          type="submit"
          onClick={handleCreateNewTask}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </header>

      <main className={style.taskListMain}>
        <div className={style.taskListMainSeparation}>
          <span className={style.taskListSpanOne}>
            <p>Tarefas criadas</p>
            <div>
              <p>{createdTasksCount}</p>
            </div>
          </span>

          <span className={style.taskListSpanTwo}>
            <p>Concluídas</p>
            <div>
              <p>{finishedTasks}</p>
              <p>de</p>
              <p>{createdTasksCount}</p>
            </div>
          </span>
        </div>

        <section
          className={
            showEmptyMessage
              ? style.emptyListContainer
              : style.emptyListContainerHidden
          }
        >
          <div className={style.emptyList}>
            <Clipboard />
            <strong>Você ainda não tem tarefas cadastradas</strong>

            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </section>

        <ul className={handleStyle()}>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                content={task.content}
                isComplete={task.isComplete}
                onDeleteTaskItem={deleteTaskItem}
                onToggleChange={toggleChange}
              />
            );
          })}
        </ul>
      </main>
    </section>
  );
}
