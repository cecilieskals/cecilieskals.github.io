import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={`${styles.notFoundPage} ${styles.narrow}`}>
      <p className={styles.eyebrow}>404</p>
      <h1>Siden blev ikke fundet</h1>
      <p className={styles.lead}>
        Linket peger på en side, der ikke findes i portfolioen.
      </p>
      <Link className={styles.button} to="/">
        Gå til forsiden
      </Link>
    </div>
  );
}

export default NotFoundPage;
