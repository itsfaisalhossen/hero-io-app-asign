import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import InstalledApp from "../Pages/InstalledApp";
import AppDetails from "../Pages/AppDetails";
import Apps from "../Pages/Apps";
import Error from "../Pages/Error";
import LoadingSpinner from "../Components/LoadingSpinner";
import RootLayouts from "../Layouts/RootLayouts";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayouts />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "/Installed-Apps",
        Component: InstalledApp,
      },
      {
        path: "/App-Details/:id",
        Component: AppDetails,
      },
    ],
  },
]);
