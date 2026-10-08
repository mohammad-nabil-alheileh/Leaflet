# Leaflet

Leaflet is a small web app for keeping track of your houseplants and which ones still need watering today.

## Features

- **Plant list.** Each card shows the plant's picture, name, room, how often it needs water, and whether it has been watered today.
- **Daily progress.** A progress bar shows how many of your plants are watered (for example, 3 of 6).
- **Filters.** Switch between **All**, **Needs Water** and **Watered**. Each tab shows how many plants it holds.
- **Mark as watered.** One tap marks a plant as watered, and another tap undoes it.
- **Add and edit plants.** Give a plant a name, a room, a watering frequency in days, and a watered-today status, then choose an illustration or leave it without one.
- **Delete plants.** Open a plant's **⋯** menu and choose Delete. A dialog asks you to confirm first.
- **Saved in the browser.** Your plants are saved to `localStorage`, so they are still there after a reload. On the first visit the app starts with six example plants.

## Tech stack

- [React 19](https://react.dev/)
- [React Router 8](https://reactrouter.com/), using a data router
- [Vite 8](https://vite.dev/) for the dev server and builds
- CSS Modules, with design tokens defined as CSS custom properties
- ESLint, with the React Hooks and React Refresh plugins

The project has no UI or icon library. All icons are inline SVG, and the font is [Poppins](https://fonts.google.com/specimen/Poppins).

## Getting started

You need [Node.js](https://nodejs.org/) 20.19+ or 22.12+, which Vite 8 requires.

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually <http://localhost:5173>.

### Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Starts the dev server with hot reload     |
| `npm run build`   | Builds the production bundle into `dist/` |
| `npm run preview` | Serves the production build locally       |
| `npm run lint`    | Runs ESLint over the project              |

## Routes

| Path                      | Page                                    |
| ------------------------- | --------------------------------------- |
| `/`                       | My Plants (list, progress and filters)  |
| `/plants/new`             | Add a plant                             |
| `/plants/new/image`       | Choose an image for the new plant       |
| `/plants/:plantId/edit`   | Edit a plant                            |
| `/plants/:plantId/edit/image` | Change the image of an existing plant |

Any other path redirects to `/`. So does an edit link for a plant that no longer exists.

## Project structure

The code is grouped by feature. Each feature folder holds its own pages, components, hooks and styles.

```
src/
├── main.jsx                  # Entry point
├── app/                      # App shell
│   ├── App.jsx
│   ├── providers.jsx         # Global providers (plant state)
│   ├── routes.jsx            # Router configuration
│   └── styles/               # Global CSS and design tokens
├── features/
│   ├── plants/               # The list page and plant state
│   │   ├── components/       # PlantCard, FilterTabs, WateringProgress, …
│   │   ├── data/             # Default plants and the room list
│   │   ├── hooks/            # usePlants, usePlantFilter
│   │   ├── state/            # Context, provider and reducer
│   │   └── utils/            # Filtering and progress helpers
│   ├── plant-form/           # Add and edit flow
│   │   ├── components/       # Form fields, frequency stepper, room select
│   │   ├── hooks/            # usePlantDraft
│   │   ├── pages/            # Add, Edit, Image and the shared draft layout
│   │   └── validation/       # validatePlant
│   └── plant-image-picker/   # Illustration grid and image assets
└── shared/                   # Reusable UI (Button, Card, BottomSheet, dialogs, icons)
```

Each feature exposes its public parts through an `index.js` file, and other features import only from that file.

## How it works

### State

`PlantsProvider` holds every plant in a `useReducer`. It sits above the router, so the plant list stays the same when you move between pages. The reducer handles four actions: `plant/added`, `plant/updated`, `plant/deleted` and `plant/wateredSet`.

After every change the list is written to `localStorage` under the key `leaflet.plants`. If the saved data is missing or invalid, or the browser blocks storage (for example in private mode), the app loads the default plants and keeps working in memory.

To reset to the example plants, run this in the browser console and then reload:

```js
localStorage.removeItem("leaflet.plants");
```

### Plant shape

```js
{
  id: "monstera",
  name: "Monstera",
  room: "Living Room",
  wateringFrequencyDays: 7,
  wateredToday: true,
  imageKey: "monstera", // null means no image
}
```

The watered status changes only when you toggle it, and it does not reset each day. The watering frequency is shown on the card for information only.

### Add and edit flow

`PlantDraftLayout` keeps one draft for the whole flow. You can move from the form to the image picker and back without losing what you typed. The draft is saved to the plant list only when you submit the form.

### Validation

| Field     | Rule                                                                                      |
| --------- | ----------------------------------------------------------------------------------------- |
| Name      | Required. 40 characters or fewer. Letters from any language and single spaces only (no digits or symbols). |
| Room      | One of: Living Room, Bedroom, Kitchen, Bathroom, Hallway, Office                           |
| Frequency | A whole number of days from 1 to 365                                                       |

## Accessibility

- The filter tabs and the water toggles use `aria-pressed`, so screen readers announce whether they are on.
- The bottom sheet and the confirm dialog are labelled dialogs.
- Every icon-only button has a descriptive `aria-label`, such as "More actions for Monstera".
- Colours were checked for contrast. The amber button uses dark text, and the amber text colour was darkened to `#94590F`.
