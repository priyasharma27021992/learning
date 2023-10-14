import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/restaurantMenu/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
     {
        path: '/',
        element: <Body/>
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantMenu/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
