import { useState } from "react";
import BackLink from "../../../shared/components/BackLink.jsx";
import Button from "../../../shared/components/Button.jsx";
import PageHeader from "../../../shared/components/PageHeader.jsx";
import ImageGrid from "../components/ImageGrid.jsx";
import styles from "./ImagePickerPage.module.css";

export default function ImagePickerPage({
  initialImageKey = null,
  backTo,
  backLabel,
  onConfirm,
  onCancel,
}) {
  const [selectedKey, setSelectedKey] = useState(initialImageKey);

  return (
    <main className={styles.page}>
      <PageHeader
        title="Choose plant image"
        before={<BackLink to={backTo}>{backLabel}</BackLink>}
      />
      <p className={styles.intro}>Pick an illustration for this plant.</p>

      <ImageGrid value={selectedKey} onChange={setSelectedKey} />

      <div className={styles.actions}>
        <Button variant="outline" fullWidth onClick={onCancel}>
          Cancel
        </Button>
        <Button fullWidth onClick={() => onConfirm(selectedKey)}>
          Use selected image
        </Button>
      </div>
    </main>
  );
}
