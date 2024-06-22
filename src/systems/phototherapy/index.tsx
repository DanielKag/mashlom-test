import { calculate } from "./logic";
import styles from "./styles.module.css";

export default function Phototherapy() {
    return (
        <>
            <div className={styles.bold}>Phototherapy</div>
            <div>3 + 4 = {calculate(3, 4)}</div>
        </>
    )
  }