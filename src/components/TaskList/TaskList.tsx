// Styles
import style from "./taskList.module.scss";

export function TaskList() {
  return (
    <section className={style.taskListContainer}>
      <header className={style.taskListHeader}>
        <input type="text" />
        <button type="submit">Criar</button>
      </header>

      <main className={style.taskListMain}>
        <div className={style.taskListMainSeparation}>
          <span className={style.taskListSpanOne}>
            <p>Tarefas criadas</p>
            <p>5</p>
          </span>

          <span className={style.taskListSpanTwo}>
            <p>Concluídas</p>
            <p>2 de 5</p>
          </span>
        </div>
      </main>
    </section>
  );
}
