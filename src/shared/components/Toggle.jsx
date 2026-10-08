import styles from "./Toggle.module.css";

export default function Toggle({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = [styles.toggle, className].filter(Boolean).join(" ");

  return (
    <label className={classes} data-disabled={disabled || undefined}>
      <span className={styles.label}>{label}</span>
      <input
        type="checkbox"
        role="switch"
        className={`visually-hidden ${styles.input}`}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked, event)}
        {...rest}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
    </label>
  );
}
