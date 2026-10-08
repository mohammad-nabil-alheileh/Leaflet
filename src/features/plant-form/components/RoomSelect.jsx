import { useId } from "react";
import { ChevronDownIcon } from "../../../shared/components/Icons.jsx";
import { ROOMS } from "../../plants/index.js";
import field from "./formField.module.css";
import styles from "./RoomSelect.module.css";

export default function RoomSelect({ value, onChange, error }) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={field.field}>
      <label htmlFor={id} className={field.label}>
        Room
      </label>
      <div className={styles.wrapper}>
        <select
          id={id}
          className={`${field.control} ${styles.select}`}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        >
          {ROOMS.map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <ChevronDownIcon className={styles.chevron} />
      </div>
      {error ? (
        <p id={errorId} className={field.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
