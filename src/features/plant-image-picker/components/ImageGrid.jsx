import { useId } from "react";
import { ILLUSTRATIONS } from "../data/illustrations.js";
import ImageTile from "./ImageTile.jsx";
import NoImageTile from "./NoImageTile.jsx";
import styles from "./ImageGrid.module.css";

export default function ImageGrid({ value, onChange, label = "Plant image" }) {
  const groupName = useId();

  return (
    <div className={styles.grid} role="radiogroup" aria-label={label}>
      <NoImageTile
        groupName={groupName}
        checked={value === null}
        onSelect={() => onChange(null)}
      />

      {ILLUSTRATIONS.map((illustration) => (
        <ImageTile
          key={illustration.key}
          groupName={groupName}
          label={illustration.name}
          checked={value === illustration.key}
          onSelect={() => onChange(illustration.key)}
        >
          <img src={illustration.src} alt="" />
        </ImageTile>
      ))}
    </div>
  );
}
