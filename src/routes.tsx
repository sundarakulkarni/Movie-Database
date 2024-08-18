import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import Overview from "./pages/overview/overview";
import AppBase from "./global/components/app-base/app-base";
import WatchList from "./pages/watchlist/watchlist";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/overview" />,
  },
  {
    path: "",
    element: <AppBase />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "watchlist", element: <WatchList /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/overview" />,
  },
];

const router = createBrowserRouter(routes);

export default router;
