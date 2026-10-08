import { useId } from "react";
import { MinusIcon, PlusIcon } from "../../../shared/components/Icons.jsx";
import {
  FREQUENCY_MAX_DAYS,
  FREQUENCY_MIN_DAYS,
} from "../validation/validatePlant.js";
import field from "./formField.module.css";
import styles from "./FrequencyStepper.module.css";

const MAX_DIGITS = String(FREQUENCY_MAX_DAYS).length;

function clamp(days) {
  return Math.min(Math.max(days, FREQUENCY_MIN_DAYS), FREQUENCY_MAX_DAYS);
}

export default function FrequencyStepper({ value, onChange, error }) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasNumber = Number.isInteger(value);

  function handleType(event) {
    const digits = event.target.value.replace(/\D/g, "").slice(0, MAX_DIGITS);
    onChange(digits === "" ? NaN : Number(digits));
  }

  function step(change) {
    onChange(hasNumber ? clamp(value + change) : FREQUENCY_MIN_DAYS);
  }

  return (
    <div className={field.field}>
      <label htmlFor={id} className={field.label}>
        Watering frequency
      </label>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.step}
          aria-label="Fewer days"
          onClick={() => step(-1)}
          disabled={hasNumber && value <= FREQUENCY_MIN_DAYS}
        >
          <MinusIcon />
        </button>
        <input
          id={id}
          className={`${field.control} ${styles.input}`}
          type="text"
          inputMode="numeric"
          value={hasNumber ? String(value) : ""}
          onChange={handleType}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        />
        <button
          type="button"
          className={styles.step}
          aria-label="More days"
          onClick={() => step(1)}
          disabled={hasNumber && value >= FREQUENCY_MAX_DAYS}
        >
          <PlusIcon />
        </button>
        <span className={styles.unit}>days</span>
      </div>
      {error ? (
        <p id={errorId} className={field.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
