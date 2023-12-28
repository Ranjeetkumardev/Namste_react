import React, { lazy ,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Errors from "./Components/Errors";
import Contact from "./Components/Contact";
import { Outlet } from "react-router-dom"; //this Outlet is component and it will filled by the children route
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
/**
 *
 * Header
 *  -Logo(Title)
 *  -Nav items(right side)
 *  -Cart
 *
 * Body
 *  -Search bar
 *  -RestruntList
 *    -ResturantCard(Many Cart)
 *
 * Footer
 *  -link
 *  Copyright
 */

/**
 *Chunking 
 * Code Spiliting 
 * Dynamic Bulding 
 * Lazy Loading 
 * on Demand Loading 
 */

 const InstaMart = lazy(() => import("./Components/instaMart"));
import Shimmer from './Components/Shimmer';
import UserContext from "./utils/UserContext";

const AppLayout = () => { 
  const [UserName , setUserName] = useState()
  useEffect(() => {
    const Userdata = {
      name: "Kumar Dev"
    };
    setUserName(Userdata)
  })

  return (
    <UserContext.Provider value={{ loddedInUser: UserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};
// if you want nested route you have to create the children
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        // Dynamic segments /routing
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
