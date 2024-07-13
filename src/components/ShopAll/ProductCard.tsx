
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-xl font-bold text-gray-700 mb-4">${product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
