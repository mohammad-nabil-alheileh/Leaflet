import { Link } from "react-router";
import styles from "./BackLink.module.css";

export default function BackLink({ to, className = "", children, ...rest }) {
  const classes = [styles.link, className].filter(Boolean).join(" ");

  return (
    <Link to={to} className={classes} {...rest}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      <span>{children}</span>
    </Link>
  );
}
