import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} Zoomish. All rights reserved.
    </div>
  );
}
