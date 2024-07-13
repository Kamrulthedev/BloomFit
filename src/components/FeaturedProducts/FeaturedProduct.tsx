import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <div className="relative w-full h-[300px] lg:h-[500px]">

      <div className="absolute top-0 left-0 w-full lg:h-full bg-black bg-opacity-5 z-10 flex justify-end p-7">
        <div className=" lg:w-[400px] lg:h-[360px] w-[200px] h-[180px] bg-green-100  rounded my-6 lg:my-12 mx-5 lg:mx-10 p-1 lg:p-2 space-y-3">
          <p className="lg:text-base text-xs  font-serif text-center mt-8 lg:mt-20">
            COMPLIMENTARY
          </p>
          <h1 className="lg:text-2xl text-sm text-center text-black font-bold">
            CUSTOM HOME GYM DESIGN
          </h1>
          <p className="text-center font-serif text-[8px] lg:text-sm lg:p-4 max-h-full">
            From $10,000 efficient spaces, to $150,000 dream gyms, we can help
            you build the perfect fitness space for your home.
          </p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="bg-green-500 p-1 lg:p-4 rounded-sm lg:text-xl font-serif"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <div className=" mb-20">
        <div>
          <img
            className="w-full h-[300px] lg:h-[500px] object-cover"
            src="https://i.ibb.co/C7tvvRr/Screenshot-2024-07-13-171833.png"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
