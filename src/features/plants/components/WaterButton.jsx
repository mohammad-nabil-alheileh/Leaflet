import Button from "../../../shared/components/Button.jsx";

export default function WaterButton({ wateredToday, plantName, onToggle, ...rest }) {
  return (
    <Button
      variant={wateredToday ? "muted" : "accent"}
      onClick={() => onToggle(!wateredToday)}
      {...rest}
    >
      {wateredToday ? "Mark as needs water" : "Mark as watered"}
      {plantName ? <span className="visually-hidden">: {plantName}</span> : null}
    </Button>
  );
}
