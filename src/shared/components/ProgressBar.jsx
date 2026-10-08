import styles from "./ProgressBar.module.css";

export default function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  className = "",
  ...rest
}) {
  const ratio = max > 0 ? value / max : 0;
  const percent = Math.round(Math.min(Math.max(ratio, 0), 1) * 100);
  const classes = [styles.progress, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest}>
      <div
        className={styles.track}
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div className={styles.fill} style={{ "--progress": `${percent}%` }} />
      </div>
      {showValue ? (
        <span className={styles.value} aria-hidden="true">
          {percent}%
        </span>
      ) : null}
    </div>
  );
}
