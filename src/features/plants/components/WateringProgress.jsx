import Card from "../../../shared/components/Card.jsx";
import ProgressBar from "../../../shared/components/ProgressBar.jsx";
import styles from "./WateringProgress.module.css";

export default function WateringProgress({ watered, total }) {
  return (
    <Card as="section" className={styles.card} aria-label="Watering progress">
      <div className={styles.summary}>
        <span className={styles.label}>Watered today</span>
        <span className={styles.count}>
          {watered}/{total}
        </span>
      </div>
      <ProgressBar
        className={styles.bar}
        value={watered}
        max={total}
        label="Plants watered today"
        showValue
      />
    </Card>
  );
}
