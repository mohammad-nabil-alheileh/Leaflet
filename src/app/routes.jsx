import { createBrowserRouter, redirect } from "react-router";
import {
  AddPlantPage,
  EditPlantPage,
  PlantDraftLayout,
  PlantImagePage,
} from "../features/plant-form/index.js";
import { MyPlantsPage } from "../features/plants/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MyPlantsPage,
  },
  {
    path: "/plants/new",
    Component: PlantDraftLayout,
    children: [
      { index: true, Component: AddPlantPage },
      { path: "image", Component: PlantImagePage },
    ],
  },
  {
    path: "/plants/:plantId/edit",
    Component: PlantDraftLayout,
    children: [
      { index: true, Component: EditPlantPage },
      { path: "image", Component: PlantImagePage },
    ],
  },
  {
    // Any unknown address goes back to the list.
    path: "*",
    loader: () => redirect("/"),
  },
]);
