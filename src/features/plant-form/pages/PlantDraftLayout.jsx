import { useMemo, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import { usePlants } from "../../plants/index.js";
import { createEmptyDraft, draftFromPlant } from "../hooks/usePlantDraft.js";

export default function PlantDraftLayout() {
  const { plantId } = useParams();

  return <DraftScope key={plantId ?? "new"} plantId={plantId} />;
}

function DraftScope({ plantId }) {
  const { plants } = usePlants();
  const plant = plantId
    ? (plants.find((item) => item.id === plantId) ?? null)
    : null;

  const [draft, setDraft] = useState(() =>
    plant ? draftFromPlant(plant) : createEmptyDraft(),
  );

  const context = useMemo(
    () => ({
      draft,
      plant,
      updateDraft(changes) {
        setDraft((current) => ({ ...current, ...changes }));
      },
    }),
    [draft, plant],
  );

  if (plantId && !plant) {
    return <Navigate to="/" replace />;
  }

  return <Outlet context={context} />;
}
