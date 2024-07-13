import Benefit from "@/components/benefits/Benefit";
import Categorie from "@/components/Categorie/Categorie";
import FeaturedProduct from "@/components/FeaturedProducts/FeaturedProduct";
import Bannar from "@/components/Hero/Bannar";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Categorie></Categorie>
            <FeaturedProduct></FeaturedProduct>
            <Benefit></Benefit>
        </div>
    );
};

export default Home;