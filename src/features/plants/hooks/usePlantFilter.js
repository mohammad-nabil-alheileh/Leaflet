import { useMemo, useState } from "react";
import { countPlantsByFilter, filterPlants } from "../utils/filterPlants.js";

export function usePlantFilter(plants, initialFilter = "all") {
  const [filter, setFilter] = useState(initialFilter);

  const visiblePlants = useMemo(
    () => filterPlants(plants, filter),
    [plants, filter],
  );

  const counts = useMemo(() => countPlantsByFilter(plants), [plants]);

  return { filter, setFilter, visiblePlants, counts };
}
