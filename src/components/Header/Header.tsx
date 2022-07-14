// Components
import { Logo } from "../../assets/Logo";

// Styles
import style from "./header.module.scss";

export function Header() {
  return(
    <div className={style.header}>
      <Logo />
    </div>
  );
};