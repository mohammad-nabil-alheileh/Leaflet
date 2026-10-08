import Card from "../../../shared/components/Card.jsx";
import PlantThumbnail from "./PlantThumbnail.jsx";
import StatusBadge from "./StatusBadge.jsx";
import WaterButton from "./WaterButton.jsx";
import styles from "./PlantCard.module.css";

function formatFrequency(days) {
  return days === 1 ? "every day" : `every ${days} days`;
}

export default function PlantCard({ plant, onToggleWatered, onMoreActions }) {
  return (
    <Card as="article" padding="sm" className={styles.card}>
      <PlantThumbnail className={styles.tile} size="lg" imageKey={plant.imageKey} />

      <div className={styles.info}>
        <h2 className={styles.name}>{plant.name}</h2>
        <p className={styles.meta}>
          {plant.room} · {formatFrequency(plant.wateringFrequencyDays)}
        </p>
      </div>

      <button
        type="button"
        className={styles.more}
        aria-label={`More actions for ${plant.name}`}
        aria-haspopup="dialog"
        onClick={() => onMoreActions(plant)}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>

      <div className={styles.status}>
        <StatusBadge wateredToday={plant.wateredToday} />
        <WaterButton
          size="sm"
          className={styles.waterButton}
          wateredToday={plant.wateredToday}
          plantName={plant.name}
          onToggle={(value) => onToggleWatered(plant.id, value)}
        />
      </div>
    </Card>
  );
}
