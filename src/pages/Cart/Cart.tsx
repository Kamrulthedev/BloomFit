import CartItem from "@/components/CartItem/CartItem";
import Chacout from "@/components/CartItem/Chacout";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialItems = [
  {
    id: 1,
    name: "AmStaff Fitness Tornado Air Bike",
    image:
      "https://i.ibb.co/xmTsJDM/life-fitness-heat-performance-row-full-1000x1000-de6e306f-c9ae-4751-997d-628b869de530.jpg",
    price: 799.99,
    quantity: 1,
    stock: 10,
    inStock: true,
  },
  {
    id: 2,
    name: "NordicTrack S15i Studio Cycle",
    image:
      "https://i.ibb.co/6rQXXJk/t5-test-track2-0-2-9efbe2f2-2392-4177-966f-d4e0eeb43dff.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 7,
    inStock: true,
  },
  {
    id: 3,
    name: "NordicTrack S15i Studio Cycle",
    image:
      "https://i.ibb.co/xmTsJDM/life-fitness-heat-performance-row-full-1000x1000-de6e306f-c9ae-4751-997d-628b869de530.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 4,
    inStock: true,
  },
  {
    id: 4,
    name: "NordicTrack S15i Studio Cycle",
    image:
      "https://i.ibb.co/6rQXXJk/t5-test-track2-0-2-9efbe2f2-2392-4177-966f-d4e0eeb43dff.jpg",
    price: 1879.99,
    quantity: 1,
    stock: 5,
    inStock: true,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialItems);

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
          <div className="border-2 border-gray-300 rounded-lg">
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
          <Chacout cartItems={cartItems}></Chacout>
        </div>
      </div>
    </div>
  );
};

export default Cart;
