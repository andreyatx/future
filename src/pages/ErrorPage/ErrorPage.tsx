import { Link } from "react-router-dom";
import { Paths } from "../../router";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <h1>ОШИБКА</h1>
        <p>Произошла ошибка, или данной страницы не существует</p>
        <Link to={Paths.Home}>Вернуться на главную</Link>
      </div>
    </div>
  );
};
