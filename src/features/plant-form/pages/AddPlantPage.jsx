import { useState } from "react";
import { useNavigate } from "react-router";
import BackLink from "../../../shared/components/BackLink.jsx";
import PageHeader from "../../../shared/components/PageHeader.jsx";
import { usePlants } from "../../plants/index.js";
import PlantForm from "../components/PlantForm.jsx";
import { usePlantDraft } from "../hooks/usePlantDraft.js";
import { hasErrors, validatePlant } from "../validation/validatePlant.js";
import styles from "./formPage.module.css";

export default function AddPlantPage() {
  const navigate = useNavigate();
  const { addPlant } = usePlants();
  const { draft, updateDraft } = usePlantDraft();

  const [triedToSave, setTriedToSave] = useState(false);
  const errors = triedToSave ? validatePlant(draft) : {};

  function handleSubmit() {
    if (hasErrors(validatePlant(draft))) {
      setTriedToSave(true);
      return;
    }
    addPlant({ ...draft, name: draft.name.trim() });
    navigate("/");
  }

  return (
    <main className={styles.page}>
      <PageHeader
        title="Add plant"
        before={<BackLink to="/">My Plants</BackLink>}
      />
      <PlantForm
        draft={draft}
        onChange={updateDraft}
        errors={errors}
        onChooseImage={() => navigate("/plants/new/image")}
        onSubmit={handleSubmit}
        submitLabel="Save plant"
        actionsShape="pill" /* the Add plant design uses pills here */
        onCancel={() => navigate("/")}
      />
    </main>
  );
}
