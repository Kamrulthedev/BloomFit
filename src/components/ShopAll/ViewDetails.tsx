import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          //   src={product.image}
          //   alt={product.name}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-6 mt-4 lg:mt-0">
        <h1 className="text-2xl lg:text-4xl font-serif">Product Name</h1>
        <div className="flex items-center my-2">
          <div className="flex items-center">
            {Array.from({ length: 8 }, (_, index) =>
              index ? (
                <AiOutlineStar key={index} className="text-yellow-400" />
              ) : (
                <AiFillStar key={index} className="text-yellow-400" />
              )
            )}
          </div>
          <span className="text-gray-600 ml-2">
            {/* ({product.reviews}) */}
          </span>
        </div>
        <p className="text-xl font-serif text-gray-900">$5.300</p>
        <div className="mt-4">
          <div className="space-y-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem necessitatibus accusantium vero fugit explicabo facere
              omnis cumque quaerat ipsum maxime. Quisquam molestias quidem sed
              similique a dolorem voluptatem nemo asperiores.
            </p>
            <p className="text-base font-serif">Quantity: 23</p>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600">
              Add-On Premium Equipment Mat $115.00
            </label>
          </div>
        </div>
        <Link to="">
          <button className="bg-green-400 text-black mt-6 p-3 rounded-lg w-full lg:w-auto lg:px-12">
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
