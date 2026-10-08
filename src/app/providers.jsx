import { PlantsProvider } from "../features/plants/index.js";

export default function AppProviders({ children }) {
  return <PlantsProvider>{children}</PlantsProvider>;
}
