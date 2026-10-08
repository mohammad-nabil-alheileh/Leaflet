import { useId } from "react";
import Button from "../../../shared/components/Button.jsx";
import Card from "../../../shared/components/Card.jsx";
import { ImageIcon, TrashIcon, XIcon } from "../../../shared/components/Icons.jsx";
import { getIllustration } from "../../plant-image-picker/index.js";
import { PlantThumbnail } from "../../plants/index.js";
import { NAME_MAX_LENGTH } from "../validation/validatePlant.js";
import FrequencyStepper from "./FrequencyStepper.jsx";
import RoomSelect from "./RoomSelect.jsx";
import WateredTodayToggle from "./WateredTodayToggle.jsx";
import field from "./formField.module.css";
import styles from "./PlantForm.module.css";

export default function PlantForm({
  draft,
  onChange,
  errors = {},
  onChooseImage,
  onSubmit,
  submitLabel,
  actionsShape = "rounded",
  onCancel,
  onDelete,
}) {
  const nameId = useId();
  const nameErrorId = `${nameId}-error`;
  const illustration = getIllustration(draft.imageKey);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <Card padding="lg" className={styles.card}>
        {/* Plant image */}
        <div className={field.field}>
          <span className={field.label}>Plant image</span>
          <div className={styles.imageRow}>
            <figure className={styles.preview}>
              <PlantThumbnail imageKey={draft.imageKey} size="lg" />
              <figcaption className={styles.caption}>
                {illustration ? illustration.name : "No image"}
              </figcaption>
            </figure>
            <div className={styles.imageActions}>
              <Button
                variant="outline"
                fullWidth
                leftIcon={<ImageIcon />}
                onClick={onChooseImage}
              >
                {illustration ? "Change plant image" : "Choose plant image"}
              </Button>
              {illustration ? (
                <Button
                  variant="neutral"
                  fullWidth
                  leftIcon={<XIcon />}
                  onClick={() => onChange({ imageKey: null })}
                >
                  Remove image
                </Button>
              ) : null}
              <p className={styles.hint}>
                {illustration
                  ? "Choose an illustration or use no image."
                  : "Choose from the supplied plant illustrations."}
              </p>
            </div>
          </div>
        </div>

        {/* Plant name */}
        <div className={field.field}>
          <label htmlFor={nameId} className={field.label}>
            Plant name
          </label>
          <input
            id={nameId}
            className={field.control}
            type="text"
            placeholder="e.g. Peace Lily"
            autoComplete="off"
            maxLength={NAME_MAX_LENGTH}
            value={draft.name}
            onChange={(event) => onChange({ name: event.target.value })}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? nameErrorId : undefined}
          />
          {errors.name ? (
            <p id={nameErrorId} className={field.error}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <RoomSelect
          value={draft.room}
          onChange={(room) => onChange({ room })}
          error={errors.room}
        />

        <FrequencyStepper
          value={draft.wateringFrequencyDays}
          onChange={(days) => onChange({ wateringFrequencyDays: days })}
          error={errors.wateringFrequencyDays}
        />

        <WateredTodayToggle
          checked={draft.wateredToday}
          onChange={(wateredToday) => onChange({ wateredToday })}
        />

        {/* Edit only */}
        {onDelete ? (
          <div className={styles.danger}>
            <Button
              variant="danger-text"
              align="start"
              leftIcon={<TrashIcon />}
              onClick={onDelete}
            >
              Delete plant
            </Button>
          </div>
        ) : null}
      </Card>

      <div className={styles.actions}>
        <Button variant="outline" shape={actionsShape} fullWidth onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" shape={actionsShape} fullWidth>
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
