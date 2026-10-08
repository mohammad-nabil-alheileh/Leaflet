import { ImageIcon } from "../../../shared/components/Icons.jsx";
import ImageTile from "./ImageTile.jsx";
import styles from "./NoImageTile.module.css";

export default function NoImageTile({ groupName, checked, onSelect }) {
  return (
    <ImageTile
      groupName={groupName}
      label="No image"
      checked={checked}
      onSelect={onSelect}
      variant="none"
    >
      <ImageIcon className={styles.icon} />
    </ImageTile>
  );
}
