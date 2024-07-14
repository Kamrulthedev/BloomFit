import { Link } from "react-router-dom";

const Order = () => {
    return (
        <div className="p-4 lg:p-10 text-center">
        <h1 className="text-2xl lg:text-5xl font-serif py-4">Order Placed Successfully!</h1>
        <p className="text-gray-700">Thank you for your purchase. Your order has been placed successfully.</p>
        <Link to="/" className="text-blue-500 mt-4 inline-block">Go to Home</Link>
      </div>
    );
};

export default Order;