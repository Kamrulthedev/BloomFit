
import MainLayout from "@/components/Layouts/MainLayout";
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
        }
      ]
    },
  ]);
  
  export default router;
  