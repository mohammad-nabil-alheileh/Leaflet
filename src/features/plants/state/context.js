import { createContext } from "react";

// Kept apart from PlantsContext.jsx because a .jsx file may only export
// components (React fast refresh rule).
export const PlantsContext = createContext(null);
