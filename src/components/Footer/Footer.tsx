// Components
import { Logo } from "../../assets/Logo";

// Styles
import style from "./footer.module.scss";

export function Footer() {
  return(
    <div className={style.footer}>
      <Logo />
    </div>
  );
};