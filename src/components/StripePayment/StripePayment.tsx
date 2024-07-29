import { Link } from "react-router-dom";

const StripePayment = () => {
  return (
    <div className="p-4 lg:p-10 text-center">
      <h1 className="text-2xl lg:text-5xl font-serif py-4">Stripe Payment</h1>
      <p className="text-gray-700">Redirecting to Stripe payment gateway...</p>
      <Link to="/" className="text-blue-500 mt-4 inline-block">Go to Home</Link>
    </div>
  );
};

export default StripePayment;
