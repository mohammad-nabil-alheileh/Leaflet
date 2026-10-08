import { useOutletContext } from "react-router";
import { ROOMS } from "../../plants/index.js";

export function createEmptyDraft() {
  return {
    name: "",
    room: ROOMS[0],
    wateringFrequencyDays: 7,
    wateredToday: false,
    imageKey: null,
  };
}

export function draftFromPlant(plant) {
  return {
    name: plant.name,
    room: plant.room,
    wateringFrequencyDays: plant.wateringFrequencyDays,
    wateredToday: plant.wateredToday,
    imageKey: plant.imageKey,
  };
}

export function usePlantDraft() {
  const context = useOutletContext();

  if (!context?.draft) {
    throw new Error("usePlantDraft must be used inside <PlantDraftLayout>.");
  }

  return context;
}
