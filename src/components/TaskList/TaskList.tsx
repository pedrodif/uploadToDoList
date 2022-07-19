// Components
import { TaskItem } from "../TaskItem/TaskItem";

// Styles
import style from "./taskList.module.scss";

// Assets
import { PlusCircle } from "phosphor-react";
import { Clipboard } from "../../assets/Clipboard";

export function TaskList() {
  return (
    <section className={style.taskListContainer}>
      <header className={style.taskListHeader}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
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
          <strong>
            Você ainda não tem tarefas cadastradas
          </strong>

          <p>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>

        <ul className={style.taskItemsArrangement}>
          <TaskItem />
          <TaskItem />
        </ul>
      </main>
    </section>
  );
}
