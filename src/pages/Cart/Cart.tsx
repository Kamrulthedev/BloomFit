import CartItem from "@/components/CartItem/CartItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialItems = [
  {
    id: 1,
    name: "AmStaff Fitness Tornado Air Bike",
    image: "https://example.com/product-image1.jpg",
    price: 799.99,
    quantity: 1,
    stock: 10,
    inStock: true,
  },
  {
    id: 2,
    name: "NordicTrack S15i Studio Cycle",
    image: "https://example.com/product-image2.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 7,
    inStock: true,
  },
  {
    id: 3,
    name: "NordicTrack S15i Studio Cycle",
    image: "https://example.com/product-image2.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 4,
    inStock: true,
  },
  {
    id: 4,
    name: "NordicTrack S15i Studio Cycle",
    image: "https://example.com/product-image2.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 5,
    inStock: true,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);
  const [isAgreed, setIsAgreed] = useState(false);

  const increaseQuantity = (id: undefined) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: undefined) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: undefined) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (confirmRemove) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const inStock = cartItems.every((item) => item.inStock);

  const handleCheckout = () => {
    // Redirect to checkout page or handle checkout logic here
    console.log("Proceeding to checkout");
  };

  return (
    <div className="p-4 lg:p-10">
    <Link className="text-slate-500 lg:p-10" to="/">
      /Home
    </Link>
    <div>
      <h1 className="text-2xl lg:text-5xl flex justify-center font-serif py-4 px-12 text-black">
        Shopping Cart
      </h1>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="col-span-2 p-8">
        <div className="border-2 border-black rounded-lg">
          <div className="flex justify-between p-5 bg-slate-200 rounded-t-lg border-b-2">
            <p>Product</p>
            <div className="flex gap-14">
              <p>Quantity</p>
              <p>Action</p>
            </div>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
      </div>

      <div className="col-span-1 py-7">
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
              <Link to="/terms" className="text-blue-600">
                terms and conditions
              </Link>
            </label>
          </div>
          <button
            className={`w-full py-2 text-white rounded ${
              inStock && isAgreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleCheckout}
            disabled={!inStock || !isAgreed}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;
