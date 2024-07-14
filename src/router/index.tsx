
import MainLayout from "@/components/Layouts/MainLayout";
import Order from "@/components/Order/Order";
import ViewDetails from "@/components/ShopAll/ViewDetails";
import Cart from "@/pages/Cart/Cart";
import Checkouts from "@/pages/Checkouts/Checkouts";
import Home from "@/pages/Home/Home";
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
    ],
  },
  {
    path: "/order-success",
    element: <Order></Order>,
  },
]);

export default router;
