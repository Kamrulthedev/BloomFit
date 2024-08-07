
import MainLayout from "@/components/Layouts/MainLayout";
import Order from "@/components/Order/Order";
import ViewDetails from "@/components/ShopAll/ViewDetails";
import StripePayment from "@/components/StripePayment/StripePayment";
import Abouts from "@/pages/About/Abouts";
import Cart from "@/pages/Cart/Cart";
import Checkouts from "@/pages/Checkouts/Checkouts";
import Home from "@/pages/Home/Home";
import ProductManagement from "@/pages/Product Management/ProductManagement";
import Shop from "@/pages/Shop/Shop";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop-all",
        element: <Shop></Shop>,
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkouts",
        element: <Checkouts></Checkouts>,
      },
      {
        path: "/about-us",
        element: <Abouts></Abouts>,
      },
      {
        path: '/product-management',
        element:<ProductManagement></ProductManagement>
      }
    ],
  },
  {
    path: "/order-success",
    element: <Order></Order>,
  },
  {
    path:'/stripe-payment',
    element:<StripePayment></StripePayment>
  },

]);

export default router;
