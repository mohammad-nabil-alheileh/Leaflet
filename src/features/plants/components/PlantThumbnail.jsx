import { ImageIcon } from "../../../shared/components/Icons.jsx";
import { getIllustration } from "../../plant-image-picker/index.js";
import styles from "./PlantThumbnail.module.css";

export default function PlantThumbnail({ imageKey, size = "md", className = "" }) {
  const illustration = getIllustration(imageKey);
  const classes = [styles.tile, className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-size={size}>
      {illustration ? (
        <img src={illustration.src} alt="" />
      ) : (
        <ImageIcon className={styles.placeholder} />
      )}
    </div>
  );
}
