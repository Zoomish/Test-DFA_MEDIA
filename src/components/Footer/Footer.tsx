import Link from "next/link";
import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link href={'https://github.com/Zoomish'}>Zoomish</Link>. All rights
        reserved.
      </p>
    </div>
  );
}
