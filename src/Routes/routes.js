import { lazy } from "react";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import HomeVideo from "../components/pages/HomeVideo/HomeVideo";

const Homepage = lazy(() => import("../components/pages/Homepage/Homepage"));

const Games = lazy(() => import("../components/pages/Games/Games"));

const routes = [
  
  {
    path: "games",
    element: <Games />,
  },
  
  
  
  {
    path: "home",
    element: <Homepage />,
  },
  
  
  
  {
    index: true,
    element: <HomeVideo />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
 
  
];

export default routes;
