import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Contacts from './Pages/Contacts/Contacts';
import Destination from './Pages/Destination/Destination';
import About from './Pages/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index : true,
        element : <Home />
      },
      {
        path : "/blog",
        element : <Blog /> 
      },
      {
        path : "/contacts",
        element : <Contacts />
      },
      {
        path : "/destination",
        element : <Destination />
      },
      {
        path : "/about",
        element : <About />
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
