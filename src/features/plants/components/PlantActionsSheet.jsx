import { useId } from "react";
import BottomSheet from "../../../shared/components/BottomSheet.jsx";
import Button from "../../../shared/components/Button.jsx";
import { PencilIcon, TrashIcon } from "../../../shared/components/Icons.jsx";
import PlantThumbnail from "./PlantThumbnail.jsx";
import styles from "./PlantActionsSheet.module.css";

// Open while `plant` is set; pass null to close it.
export default function PlantActionsSheet({ plant, onClose, onEdit, onDelete }) {
  const titleId = useId();

  return (
    <BottomSheet open={plant !== null} onClose={onClose} aria-labelledby={titleId}>
      {plant ? (
        <>
          <div className={styles.header}>
            <PlantThumbnail imageKey={plant.imageKey} size="sm" />
            <h2 id={titleId} className={styles.name}>
              {plant.name}
            </h2>
            <p className={styles.hint}>Choose an action</p>
          </div>

          <Button
            variant="neutral"
            align="start"
            fullWidth
            leftIcon={<PencilIcon />}
            onClick={() => onEdit(plant)}
          >
            Edit plant
          </Button>
          <Button
            variant="danger"
            align="start"
            fullWidth
            leftIcon={<TrashIcon />}
            onClick={() => onDelete(plant)}
          >
            Delete plant
          </Button>
          <Button variant="neutral" fullWidth onClick={onClose}>
            Cancel
          </Button>
        </>
      ) : null}
    </BottomSheet>
  );
}
