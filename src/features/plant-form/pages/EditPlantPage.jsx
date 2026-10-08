import { useState } from "react";
import { useNavigate } from "react-router";
import BackLink from "../../../shared/components/BackLink.jsx";
import ConfirmDialog from "../../../shared/components/ConfirmDialog.jsx";
import PageHeader from "../../../shared/components/PageHeader.jsx";
import { usePlants } from "../../plants/index.js";
import PlantForm from "../components/PlantForm.jsx";
import { usePlantDraft } from "../hooks/usePlantDraft.js";
import { hasErrors, validatePlant } from "../validation/validatePlant.js";
import styles from "./formPage.module.css";

export default function EditPlantPage() {
  const navigate = useNavigate();
  const { updatePlant, deletePlant } = usePlants();
  const { draft, updateDraft, plant } = usePlantDraft();

  const [triedToSave, setTriedToSave] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const errors = triedToSave ? validatePlant(draft) : {};

  function handleSubmit() {
    if (hasErrors(validatePlant(draft))) {
      setTriedToSave(true);
      return;
    }
    updatePlant(plant.id, { ...draft, name: draft.name.trim() });
    navigate("/");
  }

  function handleDeleteConfirm() {
    deletePlant(plant.id);
    navigate("/");
  }

  return (
    <main className={styles.page}>
      <PageHeader
        title="Edit plant"
        before={
          <>
            <BackLink to="/">My Plants</BackLink>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumb}>
                <li>More actions</li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className={styles.current}>
                  Edit plant
                </li>
              </ol>
            </nav>
          </>
        }
      />
      <PlantForm
        draft={draft}
        onChange={updateDraft}
        errors={errors}
        onChooseImage={() => navigate(`/plants/${plant.id}/edit/image`)}
        onSubmit={handleSubmit}
        submitLabel="Save changes"
        onCancel={() => navigate("/")}
        onDelete={() => setConfirmingDelete(true)}
      />

      <ConfirmDialog
        open={confirmingDelete}
        title={`Delete ${plant.name}?`}
        message="This removes the plant from your list. This can't be undone."
        cancelLabel="Keep plant"
        confirmLabel="Delete plant"
        confirmVariant="danger"
        onCancel={() => setConfirmingDelete(false)}
        onConfirm={handleDeleteConfirm}
      />
    </main>
  );
}
