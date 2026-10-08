import { useLocation, useNavigate } from "react-router";
import { ImagePickerPage } from "../../plant-image-picker/index.js";
import { usePlantDraft } from "../hooks/usePlantDraft.js";

export default function PlantImagePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { draft, updateDraft, plant } = usePlantDraft();
  const formPath = plant ? `/plants/${plant.id}/edit` : "/plants/new";

  function returnToForm() {
    if (location.key === "default") {
      navigate(formPath, { replace: true });
    } else {
      navigate(-1);
    }
  }

  return (
    <ImagePickerPage
      initialImageKey={draft.imageKey}
      backTo={formPath}
      backLabel={plant ? "Edit plant" : "Add plant"}
      onConfirm={(imageKey) => {
        updateDraft({ imageKey });
        returnToForm();
      }}
      onCancel={returnToForm}
    />
  );
}
