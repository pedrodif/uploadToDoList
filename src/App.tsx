// Components
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";

// Styles
import "./global.scss";

export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
};