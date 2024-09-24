import Link from "next/link";
import styles from "./header.module.scss";
import Search from "../Search/Search";
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href={"https://github.com/Zoomish"} className={styles.a}>
        Zoomish
      </Link>
      <div className={styles.links}>
        <Search />
        <Link href={"/movie"} className={styles.a}>
          Movies
        </Link>
      </div>
    </div>
  );
}
