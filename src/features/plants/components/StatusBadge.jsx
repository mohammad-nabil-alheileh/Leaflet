import needsWaterIcon from "../assets/needs-water.png";
import wateredTodayIcon from "../assets/watered-today.png";
import styles from "./StatusBadge.module.css";

export default function StatusBadge({ wateredToday }) {
  const status = wateredToday ? "watered" : "needs-water";

  return (
    <span className={styles.badge} data-status={status}>
      <span className={styles.icon} aria-hidden="true">
        <img src={wateredToday ? wateredTodayIcon : needsWaterIcon} alt="" />
      </span>
      {wateredToday ? "Watered today" : "Needs water"}
    </span>
  );
}
