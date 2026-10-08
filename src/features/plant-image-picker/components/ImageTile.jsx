import { CheckIcon } from "../../../shared/components/Icons.jsx";
import styles from "./ImageTile.module.css";

export default function ImageTile({
  groupName,
  label,
  checked,
  onSelect,
  variant = "image",
  children,
}) {
  return (
    <label className={styles.tile} data-checked={checked || undefined} data-variant={variant}>
      <input
        type="radio"
        name={groupName}
        className="visually-hidden"
        checked={checked}
        onChange={onSelect}
      />

      <span className={styles.media}>
        {children}
        {checked ? <span className={styles.selected}>Selected</span> : null}
      </span>
      <span className={styles.label}>{label}</span>

      {checked ? (
        <span className={styles.check} aria-hidden="true">
          <CheckIcon />
        </span>
      ) : null}
    </label>
  );
}
