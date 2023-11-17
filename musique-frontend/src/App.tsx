import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Connection from "./Connexion";
import Adding from "./Adding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/connection",
    element: <Connection></Connection>,
  },
  {
    path: "/Adding",
    element: <Adding></Adding>
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};


export default App