// Packages
import { ChangeEvent, useState } from "react";

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

  const showEmptyMessage = tasks.length === 0;
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
        <button type="submit" onClick={handleCreateNewTask}>
          Criar
          <PlusCircle size={20} />
        </button>
      </header>

      <main className={style.taskListMain}>
        <div className={style.taskListMainSeparation}>
          <span className={style.taskListSpanOne}>
            <p>Tarefas criadas</p>
            <div>
              <p>5</p>
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

        <ul className={style.taskItemsArrangement}>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                content={task.content}
                onDeleteTaskItem={deleteTaskItem}
                onToggleChange={toggleChange}
                isComplete={false}
              />
            );
          })}
        </ul>
      </main>
    </section>
  );
}
