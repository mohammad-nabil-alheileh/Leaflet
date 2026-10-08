import { useId } from "react";
import { useModalDialog } from "../hooks/useModalDialog.js";
import Button from "./Button.jsx";
import styles from "./ConfirmDialog.module.css";

export default function ConfirmDialog({
  open = false,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "primary",
  onConfirm,
  onCancel,
}) {
  const dialogProps = useModalDialog(open, onCancel);
  const titleId = useId();
  const messageId = useId();

  return (
    <dialog
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={message ? messageId : undefined}
      {...dialogProps}
    >
      <div className={styles.content}>
        <h2 id={titleId} className={styles.title}>
          {title}
        </h2>
        {message ? (
          <p id={messageId} className={styles.message}>
            {message}
          </p>
        ) : null}
        <div className={styles.actions}>
          <Button variant="outline" fullWidth onClick={onCancel} autoFocus>
            {cancelLabel}
          </Button>
          <Button variant={confirmVariant} fullWidth onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </dialog>
  );
}
