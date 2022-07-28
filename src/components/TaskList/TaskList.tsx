// Packages
import { useState } from "react";

// Components
import { TaskItem } from "../TaskItem/TaskItem";

// Styles
import style from "./taskList.module.scss";

// Assets
import { PlusCircle } from "phosphor-react";
import { Clipboard } from "../../assets/Clipboard";

interface ITask {
  id: number;
  content: string;
  isComplete: boolean;
}

export function TaskList() {
  // States
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [countTasks, setCountTasks] = useState<number>(0);
  const [createdTasks, setCreatedTasks] = useState<number>();

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

  function handleCreatedTasksUpdate() {
    let count = tasks.length;
    setCreatedTasks(count);
  }

  const showEmptyMessage = tasks.length === 0;

  const showTasksContainer = tasks.length === 1;
  const showTasksContainerSecondOption = tasks.length > 1;

  function handleStyle(){
    if(showTasksContainer){
      return style.taskItemsArrangement
    }else if(showTasksContainerSecondOption){
      return style.taskItemsArrangementSecondOption
    }else{
      return style.taskItemsArrangementHidden
    }
  }

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
          onClick={() => {
            handleCreateNewTask();
            handleCreatedTasksUpdate();
          }}
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
              <p>{createdTasks}</p>
            </div>
          </span>

          <span className={style.taskListSpanTwo}>
            <p>Concluídas</p>
            <div>
              <p>2 de 5</p>
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

        <ul
          className={handleStyle()}
        >
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                content={task.content}
                onDeleteTaskItem={deleteTaskItem}
                onToggleChange={toggleChange}
                isComplete
              />
            );
          })}
        </ul>
      </main>
    </section>
  );
}
