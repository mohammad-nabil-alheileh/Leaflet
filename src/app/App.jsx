import { RouterProvider } from "react-router/dom";
import AppProviders from "./providers.jsx";
import { router } from "./routes.jsx";

// Providers sit outside the router so the plant list survives every page change.
export default function App() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}
