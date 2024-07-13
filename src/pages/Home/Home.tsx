import Categorie from "@/components/Categorie/Categorie";
import FeaturedProduct from "@/components/FeaturedProducts/FeaturedProduct";
import Bannar from "@/components/Hero/Bannar";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Categorie></Categorie>
            <FeaturedProduct></FeaturedProduct>
        </div>
    );
};

export default Home;