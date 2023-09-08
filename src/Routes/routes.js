import AuthGuard from "./AuthGuard";
import { GAME_TOKEN } from "../utils/Constants";
import Header from "../components/common/Header/Header";
import HomeVideo from "../components/pages/HomeVideo/HomeVideo";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import Yoga from "../components/pages/Yoga/Yoga";
import Dhyana from "../components/pages/Dhyana/Dhyana";
import ContinueGame from "../components/pages/ContinueGame/ContinueGame";
import Games from "../components/pages/Games/Games";
import ContactUs from "../components/pages/ContactUs/ContactUs";


const routes = [
  
  
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "continue",
    element: <ContinueGame />,
  },
 
 
  {
    path: "my-collectibles",
    element: (
      <>
        <Header />
        < ></>
      </>
    ),
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
    path: "yoga",
    element: <Yoga />,
  },
  {
    path: "dhyana",
    element: <Dhyana />,
  },
  {
    path: "contact",
    element: <ContactUs />
  }
];


export default routes;
