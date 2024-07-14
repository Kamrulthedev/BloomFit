import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg p-2 bg-white">
      <img
        className="w-full object-cover p-4 transition-transform hover:scale-x-110"
        src={product.image}
        alt={"Images"}
      />
      <div className="px-6 py-4 space-y-2 flex justify-between items-center">
        <div>
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <div className="flex items-center">
            {Array.from({ length: 8 }, (_, index) =>
              index ? (
                <AiOutlineStar key={index} className="text-yellow-400" />
              ) : (
                <AiFillStar key={index} className="text-yellow-400" />
              )
            )}
            <span className="text-gray-600 ml-2">({product.reviews})</span>
          </div>
          <p className="text-gray-700 text-base">
            From ${product.price.toFixed(2)}
          </p>
        </div>
        <Link className="p-2 rounded-lg text-lg font-serif bg-green-300" to="/details">
          view details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
