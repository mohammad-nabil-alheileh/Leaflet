import { useModalDialog } from "../hooks/useModalDialog.js";
import styles from "./BottomSheet.module.css";

export default function BottomSheet({
  open = false,
  onClose,
  label,
  className = "",
  children,
  ...rest
}) {
  const dialogProps = useModalDialog(open, onClose);
  const classes = [styles.sheet, className].filter(Boolean).join(" ");

  return (
    <dialog className={classes} aria-label={label} {...dialogProps} {...rest}>
      <div className={styles.content}>
        <span className={styles.handle} aria-hidden="true" />
        {children}
      </div>
    </dialog>
  );
}
