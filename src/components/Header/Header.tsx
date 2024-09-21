import Link from "next/link";
import styles from "./header.module.scss";
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.a}>Zoomish</Link>
      <div>
        <a href="/sign-in">Sign In</a>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
}
