
import MainLayout from "@/components/Layouts/MainLayout";
import ViewDetails from "@/components/ShopAll/ViewDetails";
import Home from "@/pages/Home/Home";
import Shop from "@/pages/Shop/Shop";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/shop-all',
          element:<Shop></Shop>
        },
        {
          path:"/details",
          element:<ViewDetails></ViewDetails>
        }
      ]
    },
  ]);
  
  export default router;
  