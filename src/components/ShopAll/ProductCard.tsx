import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full object-cover transition-transform hover:scale-x-110" src={product.image} alt={'Images'} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            index 
              ? <AiFillStar key={index} className="text-yellow-400" />
              : <AiOutlineStar key={index} className="text-yellow-400" />
          ))}
          <span className="text-gray-600 ml-2">({product.reviews})</span>
        </div>
        <p className="text-gray-700 text-base mt-2">From ${product.price.toFixed(2)}</p>
        <p className="text-gray-500 text-sm mt-1">{product.financeMessage} <a href={product.financeLink} className="text-blue-500 underline">See if you qualify</a></p>
      </div>
    </div>
  );
};

export default ProductCard;
