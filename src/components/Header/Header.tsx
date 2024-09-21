import Link from "next/link";
import styles from "./header.module.scss";
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={"https://github.com/Zoomish"} className={styles.a}>
        Zoomish
      </Link>
      <div className={styles.links}>
        <Link href={"/movie"} className={styles.a}>
          Movies
        </Link>
        <Link href={"/user/sign-up"} className={styles.a}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
