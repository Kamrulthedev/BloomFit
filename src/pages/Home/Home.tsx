import Benefit from "@/components/benefits/Benefit";
import Categorie from "@/components/Categorie/Categorie";
import Comitment from "@/components/Comitment/Comitment";
import FeaturedProduct from "@/components/FeaturedProducts/FeaturedProduct";
import Bannar from "@/components/Hero/Bannar";
import ImageGallery from "@/components/ImageGallery/ImageGallery";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Categorie></Categorie>
            <FeaturedProduct></FeaturedProduct>
            <Benefit></Benefit>
            <ImageGallery></ImageGallery>
            <Comitment></Comitment>
        </div>
    );
};

export default Home;