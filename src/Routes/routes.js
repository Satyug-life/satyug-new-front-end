import { lazy } from "react";
import Homepage from "../components/pages/Homepage/Homepage";
import ProtectedRoute from "./ProtectedRoute";


const Games = lazy(() => import("../components/pages/Games/Games"));

const routes = [
  
 
  {
    path: "games",
    element: <Games />,
  },
  
  {
    index: true,
    element: <Homepage />,
  },
 
];
export const authRoutes = [
  {
    path: "my-collectibles",
    element: (
      <ProtectedRoute>
        < ></>
      </ProtectedRoute>
    ),
  },

  
];

export default routes;
