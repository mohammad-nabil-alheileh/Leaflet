import { countPlantsByFilter } from "./filterPlants.js";

export function calculateProgress(plants) {
  const counts = countPlantsByFilter(plants);

  return {
    watered: counts.watered,
    total: counts.all,
  };
}
