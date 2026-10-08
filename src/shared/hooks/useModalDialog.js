import { useEffect, useRef } from "react";

// Connects a native <dialog> to an `open` prop and an `onClose` callback.
// Spread the result onto the dialog: <dialog {...useModalDialog(open, onClose)}>
export function useModalDialog(open, onClose) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return {
    ref,

    // Fires when the browser closes the dialog itself (Escape key).
    // Skipped when the close came from the parent setting open={false}.
    onClose() {
      if (open) onClose?.();
    },

    // The dialog's content fills it, so a click on the dialog element
    // itself can only be a click on the dimmed backdrop.
    onClick(event) {
      if (event.target === event.currentTarget) onClose?.();
    },
  };
}
