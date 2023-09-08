import AuthGuard from "./AuthGuard";
import { GAME_TOKEN } from "../utils/Constants";
import HomeVideo from "../components/pages/HomeVideo/HomeVideo";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import Dhyana from "../components/pages/Dhyana/Dhyana";
import Games from "../components/pages/Games/Games";


const routes = [
  
 
  {
    path: "games",
    element: <Games />,
  },
 

  
  {
    index: true,
    element: (
      <AuthGuard type={GAME_TOKEN.GameVerifyToken}>
        <HomeVideo />
      </AuthGuard>
    ),
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  

  {
    path: "dhyana",
    element: <Dhyana />,
  },
];


export default routes;
