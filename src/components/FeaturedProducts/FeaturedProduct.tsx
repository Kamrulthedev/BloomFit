import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 flex justify-end ">
        <div className=" lg:w-[400px] lg:h-[360px] w-full h-[100px] bg-green-100 rounded my-28 mx-20 space-y-5">
          <p className="text-base font-serif text-center lg:mt-16">
            COMPLIMENTARY
          </p>
          <h1 className="lg:text-2xl text-xl text-center text-black font-bold">
            CUSTOM HOME GYM DESIGN
          </h1>
          <p className="text-center font-serif text-xs lg:text-base p-4">
            From $10,000 efficient spaces, to $150,000 dream gyms, we can help
            you build the perfect fitness space for your home.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-green-500 p-4 rounded-sm text-xl font-serif"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <div className=" mb-20">
        <div>
          <img
            className="w-full h-[300px] lg:h-[500px]"
            src="https://i.ibb.co/XsdDx5c/Screenshot-2024-07-13-151908.png"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
