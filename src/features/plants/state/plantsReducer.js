export function plantsReducer(plants, action) {
  switch (action.type) {
    case "plant/added":
      return [...plants, action.plant];

    case "plant/updated":
      return plants.map((plant) =>
        plant.id === action.id
          ? { ...plant, ...action.changes, id: plant.id }
          : plant,
      );

    case "plant/deleted":
      return plants.filter((plant) => plant.id !== action.id);

    case "plant/wateredSet":
      return plants.map((plant) =>
        plant.id === action.id
          ? { ...plant, wateredToday: action.wateredToday }
          : plant,
      );

    default:
      throw new Error(`Unknown plants action: ${action.type}`);
  }
}
