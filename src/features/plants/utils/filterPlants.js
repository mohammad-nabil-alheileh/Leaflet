export const PLANT_FILTERS = ["all", "needs-water", "watered"];

export function filterPlants(plants, filter) {
  switch (filter) {
    case "needs-water":
      return plants.filter((plant) => !plant.wateredToday);
    case "watered":
      return plants.filter((plant) => plant.wateredToday);
    default:
      return plants;
  }
}

export function countPlantsByFilter(plants) {
  const watered = plants.filter((plant) => plant.wateredToday).length;

  return {
    all: plants.length,
    "needs-water": plants.length - watered,
    watered,
  };
}
