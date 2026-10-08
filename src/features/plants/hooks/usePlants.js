import { useContext } from "react";
import { PlantsContext } from "../state/context.js";

export function usePlants() {
  const context = useContext(PlantsContext);

  if (context === null) {
    throw new Error("usePlants must be used inside <PlantsProvider>.");
  }

  return context;
}
