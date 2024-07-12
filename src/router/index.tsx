
import MainLayout from "@/components/Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:''
        }
      ]
    },
  ]);
  
  export default router;
  