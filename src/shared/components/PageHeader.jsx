import styles from "./PageHeader.module.css";

export default function PageHeader({
  title,
  before = null,
  action = null,
  className = "",
  ...rest
}) {
  const classes = [styles.header, className].filter(Boolean).join(" ");

  return (
    <header className={classes} {...rest}>
      {before ? <div className={styles.before}>{before}</div> : null}
      <div className={styles.row}>
        <h1 className={styles.title}>{title}</h1>
        {action ? <div className={styles.action}>{action}</div> : null}
      </div>
    </header>
  );
}
