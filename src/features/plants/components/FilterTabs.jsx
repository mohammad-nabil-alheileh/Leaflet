import { PLANT_FILTERS } from "../utils/filterPlants.js";
import styles from "./FilterTabs.module.css";

const LABELS = {
  all: "All",
  "needs-water": "Needs Water",
  watered: "Watered",
};

export default function FilterTabs({ value, onChange, counts }) {
  return (
    <div className={styles.tabs} role="group" aria-label="Filter plants">
      {PLANT_FILTERS.map((filter) => {
        const active = filter === value;

        return (
          <button
            key={filter}
            type="button"
            className={styles.tab}
            data-active={active || undefined}
            aria-pressed={active}
            onClick={() => onChange(filter)}
          >
            {LABELS[filter]} ({counts[filter]})
          </button>
        );
      })}
    </div>
  );
}
