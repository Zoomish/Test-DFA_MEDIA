import { ClimbingBoxLoader } from "react-spinners";
import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <ClimbingBoxLoader color="#fff" />
    </div>
  );
}
