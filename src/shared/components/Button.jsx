import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  shape = "rounded",
  align = "center",
  fullWidth = false,
  leftIcon = null,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={classes}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      data-align={align}
      data-full-width={fullWidth || undefined}
      {...rest}
    >
      {leftIcon ? (
        <span className={styles.icon} aria-hidden="true">
          {leftIcon}
        </span>
      ) : null}
      <span>{children}</span>
    </button>
  );
}