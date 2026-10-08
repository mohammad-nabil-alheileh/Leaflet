import Button from "../../../shared/components/Button.jsx";
import { PlusIcon } from "../../../shared/components/Icons.jsx";
import emptyStatePlant from "../assets/empty-state-plant.png";
import styles from "./EmptyState.module.css";

export default function EmptyState({ onAddPlant }) {
  return (
    <section className={styles.empty}>
      <img className={styles.image} src={emptyStatePlant} alt="" />
      <h2 className={styles.title}>No plants yet</h2>
      <p className={styles.text}>
        Add your first plant to start tracking watering.
      </p>
      <Button
        className={styles.button}
        leftIcon={<PlusIcon />}
        fullWidth
        onClick={onAddPlant}
      >
        Add your first plant
      </Button>

      {/* Decorative hint from the design; the button label already says it all */}
      <div className={styles.hint} aria-hidden="true">
        <svg
          className={styles.arrow}
          viewBox="0 0 32 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <path d="M29 18C19 20 10 16 6 5" />
          <path d="M6 5L4 12M6 5L12 8" />
        </svg>
        <span className={styles.hintLabel}>Start here</span>
      </div>
    </section>
  );
}
