import { CiCircleRemove } from "react-icons/ci";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 border-t-2 rounded-lg">
        <div className="flex items-center lg:h-full h-14">
          <img
            src={item.image}
            alt={item.name}
            className="lg:w-20 w-12 h-12 lg:h-20 rounded-full object-cover mr-4 lg:rounded-md transition-transform hover:scale-x-110"
          />
          <div>
            <h3 className="lg:text-lg text-[8px] font-serif">{item.name}</h3>
            <p className="text-gray-600 lg:text-base text-xs">
              Price: ${item.price}
            </p>
            <p className="text-gray-600 lg:text-base text-xs">
              In Stock: {item.stock}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onDecrease(item.id)}
            disabled={item.quantity <= 1}
            className="lg:px-2 px-1 py-0 lg:py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span className="lg:px-4">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            disabled={item.quantity >= item.stock}
            className="lg:px-2 px-1 py-0  lg:py-1 bg-gray-200 rounded"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="lg:px-2 lg:py-1 bg-red-500 text-white rounded ml-4"
          >
            <CiCircleRemove className="lg:hidden" />
            <p className="md:hidden lg:block hidden"> Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
