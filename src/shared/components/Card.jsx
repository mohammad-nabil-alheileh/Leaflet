import styles from "./Card.module.css";

export default function Card({
  as: Component = "div",
  padding = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} data-padding={padding} {...rest}>
      {children}
    </Component>
  );
}
