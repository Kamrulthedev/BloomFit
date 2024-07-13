import Footer from "@/pages/shared/Footer";
import Navber from "@/pages/shared/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-stone-100">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;