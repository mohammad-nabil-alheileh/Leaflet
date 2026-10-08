import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../shared/components/Button.jsx";
import ConfirmDialog from "../../../shared/components/ConfirmDialog.jsx";
import { PlusIcon } from "../../../shared/components/Icons.jsx";
import PageHeader from "../../../shared/components/PageHeader.jsx";
import EmptyState from "../components/EmptyState.jsx";
import FilterTabs from "../components/FilterTabs.jsx";
import PlantActionsSheet from "../components/PlantActionsSheet.jsx";
import PlantList from "../components/PlantList.jsx";
import WateringProgress from "../components/WateringProgress.jsx";
import { usePlantFilter } from "../hooks/usePlantFilter.js";
import { usePlants } from "../hooks/usePlants.js";
import { calculateProgress } from "../utils/calculateProgress.js";
import styles from "./MyPlantsPage.module.css";

const FILTER_EMPTY_MESSAGES = {
  all: "No plants here.",
  "needs-water": "All plants are watered.",
  watered: "No plants watered yet.",
};

export default function MyPlantsPage() {
  const navigate = useNavigate();
  const { plants, deletePlant, setWateredToday } = usePlants();
  const { filter, setFilter, visiblePlants, counts } = usePlantFilter(plants);

  const [actionsPlantId, setActionsPlantId] = useState(null);
  const [deletePlantId, setDeletePlantId] = useState(null);
  const actionsPlant = plants.find((plant) => plant.id === actionsPlantId) ?? null;
  const plantToDelete = plants.find((plant) => plant.id === deletePlantId) ?? null;

  function goToAddPlant() {
    navigate("/plants/new");
  }

  function handleEdit(plant) {
    setActionsPlantId(null);
    navigate(`/plants/${plant.id}/edit`);
  }

  function handleDeleteRequest(plant) {
    setActionsPlantId(null);
    setDeletePlantId(plant.id);
  }

  function handleDeleteConfirm() {
    deletePlant(deletePlantId);
    setDeletePlantId(null);
  }

  const isEmpty = plants.length === 0;
  const addPlantButton = (
    <Button
      leftIcon={<PlusIcon />}
      fullWidth={isEmpty}
      onClick={goToAddPlant}
    >
      Add plant
    </Button>
  );

  return (
    <main className={styles.page}>
      {/* With no plants the design puts a full-width button under the title;
          otherwise it sits next to the title. */}
      <PageHeader title="My Plants" action={isEmpty ? null : addPlantButton} />
      {isEmpty ? addPlantButton : null}

      <WateringProgress {...calculateProgress(plants)} />
      <FilterTabs value={filter} onChange={setFilter} counts={counts} />

      {isEmpty ? (
        <EmptyState onAddPlant={goToAddPlant} />
      ) : (
        <PlantList
          plants={visiblePlants}
          onToggleWatered={setWateredToday}
          onMoreActions={(plant) => setActionsPlantId(plant.id)}
          emptyMessage={FILTER_EMPTY_MESSAGES[filter]}
        />
      )}

      <PlantActionsSheet
        plant={actionsPlant}
        onClose={() => setActionsPlantId(null)}
        onEdit={handleEdit}
        onDelete={handleDeleteRequest}
      />

      <ConfirmDialog
        open={plantToDelete !== null}
        title={plantToDelete ? `Delete ${plantToDelete.name}?` : ""}
        message="This removes the plant from your list. This can't be undone."
        cancelLabel="Keep plant"
        confirmLabel="Delete plant"
        confirmVariant="danger"
        onCancel={() => setDeletePlantId(null)}
        onConfirm={handleDeleteConfirm}
      />
    </main>
  );
}
