import ShopAll from "@/components/ShopAll/ShopAll";
import { Link } from "react-router-dom";

const Shop = () => {
    return (
        <div>
            <Link className="text-sm font-serif p-7" to='/'>Home/Shop</Link>
            <ShopAll></ShopAll>
        </div>
    );
};

export default Shop;