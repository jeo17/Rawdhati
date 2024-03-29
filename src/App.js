import "./app.css"
import AboutUs from './about-us';
import Help from './help';
import Start from './Start';
import SignPr from "./signin&up/sign_pr";
import SignKin from "./signin&up/sign_kin"
import KinForm from "./signin&up/KinForm";
import PrHome from "./Home/PrHome"
import KinHome from './Home/KinHome';
import Visitor from "./VisitorRed"
import Page404 from "./Page_404";
import KinChat from "./Home/kin component/KinChat";
import PrChat from "./Home/Pr component/PrChat";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "./context/Theme";


function App() {
  const {theme} = useContext(ThemeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
      errorElement: <Page404 />
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/parent_sign",
      element: <SignPr />,
    },
    {
      path: "/kindergarten_form/:kinId",
      element: <KinForm />,
    },
    {
      path: "/pr_home/:prId",
      element: <PrHome />,
    },
    {
      path: "/Visitor",
      element: <Visitor />,
    },
    {
      path: "/kindergarten_sign",
      element: <SignKin />,
    },
    {
      path: "/kin_home/:kinId",
      element: <KinHome />,
    },
    {
      path: "/Kin-ChatRoom/:kinId",
      element: <KinChat />,
    },
    {
      path: "/Pr-ChatRoom/:prId",
      element: <PrChat />,
    },
    
 
  
  ]);
  return(
    <div id="L_D" className={`App ${theme}`}><RouterProvider router={router} /></div>
  )
}

export default App;
