import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import GadgetCards from "../components/GadgetCards/GadgetCards";
import GadgetDetails from "../pages/GadgetDetails/GadgetDetails";
import CartProduct from "../components/CartProduct/CartProduct";
import WishListProduct from "../components/WishListProduct/WishListProduct";
import Products from "../pages/Products/Products";
import AboutUs from "../pages/AboutUs/AboutUs";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/cards/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/:cart",
            element: <CartProduct></CartProduct>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/dashboard/:wishlist",
            element: <WishListProduct></WishListProduct>,
          },
        ],
      },
      {
        path: "/gadget/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("../gadgets.json"),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
    ],
  },
]);

export default routes;
