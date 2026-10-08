import PlantCard from "./PlantCard.jsx";
import styles from "./PlantList.module.css";

export default function PlantList({
  plants,
  onToggleWatered,
  onMoreActions,
  emptyMessage = "No plants here.",
}) {
  if (plants.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>;
  }

  return (
    <ul className={styles.list}>
      {plants.map((plant) => (
        <li key={plant.id}>
          <PlantCard
            plant={plant}
            onToggleWatered={onToggleWatered}
            onMoreActions={onMoreActions}
          />
        </li>
      ))}
    </ul>
  );
}
