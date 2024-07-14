const CartItem = ({ item, onIncrease, onDecrease, onRemove }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 border-t-2 rounded-lg">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover mr-4 rounded-md transition-transform hover:scale-x-110"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Price: ${item.price}</p>
            <p className="text-gray-600">In Stock: {item.stock}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity <= 1}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            disabled={item.quantity >= item.stock}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="px-2 py-1 bg-red-500 text-white rounded ml-4"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
