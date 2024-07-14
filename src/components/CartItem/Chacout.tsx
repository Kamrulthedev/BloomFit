import { useState } from "react";
import { Link } from "react-router-dom";

const Chacout = ({ cartItems }: any) => {
  const [isAgreed, setIsAgreed] = useState(false);

  const total = cartItems
    .reduce((acc: any, item: any) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const inStock = cartItems.every((item: any) => item.inStock);

  const handleCheckout = () => {
    // Redirect to checkout page or handle checkout logic here
    console.log("Proceeding to checkout");
  };

  return (
    <div className="border-2 p-4 rounded-lg">
      <div className="border-b space-y-5 pb-4">
        <h2 className="text-3xl font-serif text-center">Total</h2>
        <p className="text-xl">${total}</p>
        <p className="text-gray-500">
          Taxes and shipping calculated at checkout
        </p>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="terms"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <label htmlFor="terms" className="ml-2 text-gray-600">
          I agree with the{" "}
          <Link to="/" className="text-blue-600">
            terms and conditions
          </Link>
        </label>
      </div>
      <Link to="/">
        <button
          className={`w-full py-2 text-white rounded ${
            inStock && isAgreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleCheckout}
          disabled={!inStock || !isAgreed}
        >
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default Chacout;
