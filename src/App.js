import "./app.css"
import AboutUs from './about-us';
import Help from './help';
import Start from './Start';
import SignPr from "./signin&up/sign_pr";
import SignKin from "./signin&up/sign_kin"
import KinForm from "./signin&up/KinForm";
import PrHome from "./PrHome"
import KinHome from './KinHome';
import Visitor from "./VisitorRed"
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
      errorElement: <div> error</div>
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
      path: "/kindergarten_form",
      element: <KinForm />,
    },
    {
      path: "/pr_home",
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
      path: "/kin_home",
      element: <KinHome />,
    },
 
  
  ]);
  return(
    <div id="L_D" className={`App ${theme}`}><RouterProvider router={router} /></div>
  )
}

export default App;
