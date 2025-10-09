import LoadingSpinner from "../Components/LoadingSpinner";
import { createBrowserRouter } from "react-router";
import InstalledApp from "../Pages/InstalledApp";
import RootLayouts from "../Layouts/RootLayouts";
import AppDetails from "../Pages/AppDetails";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";

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
        path: "/All-Apps",
        Component: Apps,
      },
      {
        path: "/Installed-Apps",
        Component: InstalledApp,
      },
      {
        path: "/App-Details/:prductID",
        Component: AppDetails,
      },
    ],
  },
]);
