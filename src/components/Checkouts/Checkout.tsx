import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePaymentMethodChange = (method: any) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "cash") {
      // Handle cash on delivery logic
      // Deduct quantity from stock
      navigate("/order-success");
    } else if (paymentMethod === "stripe") {
      // Redirect to Stripe payment
      // After successful payment, redirect to success page and deduct quantity from stock
      navigate("/stripe-payment");
    }
  };
  return (
    <div className="p-4 lg:p-10 bg-slate-100">
      <h1 className="text-2xl lg:text-5xl font-serif py-4 text-center">
        Checkout
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              required
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Delivery Address</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-6 ">
            <label className="block mb-4 text-gray-700">Payment Method</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => handlePaymentMethodChange("cash")}
                className={`p-2 border rounded ${
                  paymentMethod === "cash" ? "bg-green-700 text-white" : ""
                }`}
              >
                Cash on Delivery
              </button>
              <button
                type="button"
                onClick={() => handlePaymentMethodChange("stripe")}
                className={`p-2 border rounded ${
                  paymentMethod === "stripe" ? "bg-green-700 text-white" : ""
                }`}
              >
                Stripe
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handlePlaceOrder}
            className={`w-full p-2 ${
              paymentMethod ? "bg-primary text-black" : ""
            } bg-black text-white rounded`}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
