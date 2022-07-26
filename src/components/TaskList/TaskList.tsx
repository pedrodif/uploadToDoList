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
}

export function TaskList() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleCreateNewTask() {
    if (newTaskContent.trim()) {
      const newTask = {
        id: Math.random(),
        content: newTaskContent,
      };
      setTasks((oldState) => [...oldState, newTask]);
    }
    setNewTaskContent("");
  }

  function deleteTaskItem(id: number) {
    const tasksAfterRemoval = tasks.filter((task) => task.id !== id);
    setTasks(tasksAfterRemoval);
  }

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

        <div className={style.emptyList}>
          <Clipboard />
          <strong>Você ainda não tem tarefas cadastradas</strong>

          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>

        <ul className={style.taskItemsArrangement}>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                content={task.content}
                onDeleteTaskItem={deleteTaskItem}
              />
            );
          })}
        </ul>
      </main>
    </section>
  );
}
function value(value: any): void {
  throw new Error("Function not implemented.");
}
