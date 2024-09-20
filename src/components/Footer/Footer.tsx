import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link to={'https://github.com/Zoomish'}>Zoomish</Link>. All rights
        reserved.
      </p>
    </div>
  );
}
