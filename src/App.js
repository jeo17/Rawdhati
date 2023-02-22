import "./app.css"
import AboutUs from './about-us';
import Help from './help';
import Home from './home';
import SignPr from "./signin&up/sign_pr";
import SignKin from "./signin&up/sign_kin";
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
      element: <Home />,
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
      path: "/kindergarten_sign",
      element: <SignKin />,
    },
 
  
  ]);
  return(
    <div id="L_D" className={`App ${theme}`}><RouterProvider router={router} /></div>
  )
}

export default App;
