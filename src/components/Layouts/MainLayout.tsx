import Navber from "@/pages/shared/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-stone-200 h-[800px]">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;