import Toggle from "../../../shared/components/Toggle.jsx";

export default function WateredTodayToggle({ checked, onChange }) {
  return <Toggle label="Watered today?" checked={checked} onChange={onChange} />;
}
