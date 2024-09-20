import styles from "./footer.module.scss";
export default function FooterC() {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} Zoomish. All rights reserved.
    </footer>
  );
}
