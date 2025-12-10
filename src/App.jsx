import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout.jsx';
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Portfolio from './assets/components/Portfolio/Portfolio.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import NotFound from './assets/components/NotFound/NotFound.jsx';

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [   
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  
  return <RouterProvider router={routers} />;
}

export default App;