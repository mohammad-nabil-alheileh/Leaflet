import { useEffect, useMemo, useReducer } from "react";
import { createId } from "../../../shared/utils/ids.js";
import { DEFAULT_PLANTS } from "../data/defaultPlants.js";
import { PlantsContext } from "./context.js";
import { plantsReducer } from "./plantsReducer.js";

const STORAGE_KEY = "leaflet.plants";

// Saved plants from this browser, or the defaults on first visit.
// Storage can be blocked (private mode) or hold bad data, so fall back quietly.
function loadPlants() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : DEFAULT_PLANTS;
  } catch {
    return DEFAULT_PLANTS;
  }
}

export function PlantsProvider({ children }) {
  const [plants, dispatch] = useReducer(plantsReducer, undefined, loadPlants);

  // Save after every change so the list survives a reload.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
    } catch {
      // Storage full or blocked: keep working in memory.
    }
  }, [plants]);

  const value = useMemo(
    () => ({
      plants,

      addPlant(fields) {
        const plant = {
          imageKey: null,
          wateredToday: false,
          ...fields,
          id: createId(),
        };
        dispatch({ type: "plant/added", plant });
        return plant.id;
      },

      updatePlant(id, changes) {
        dispatch({ type: "plant/updated", id, changes });
      },

      deletePlant(id) {
        dispatch({ type: "plant/deleted", id });
      },

      setWateredToday(id, wateredToday) {
        dispatch({ type: "plant/wateredSet", id, wateredToday });
      },
    }),
    [plants],
  );

  return <PlantsContext value={value}>{children}</PlantsContext>;
}
