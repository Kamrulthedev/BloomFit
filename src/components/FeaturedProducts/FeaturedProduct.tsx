import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 z-10 flex justify-end p-4 md:p-6 lg:p-7">
        <div className="bg-green-100 rounded my-6 mx-5 lg:my-12 lg:mx-10 p-2 lg:p-4 space-y-3 flex flex-col items-center justify-center text-center w-[200px] md:w-[300px] lg:w-[400px] h-[180px] md:h-[250px] lg:h-[360px]">
          <p className="text-xs md:text-sm lg:text-base font-serif">
            COMPLIMENTARY
          </p>
          <h1 className="text-sm md:text-lg lg:text-2xl text-black font-bold">
            CUSTOM HOME GYM DESIGN
          </h1>
          <p className="text-[8px] md:text-xs lg:text-sm lg:p-4">
            From $10,000 efficient spaces, to $150,000 dream gyms, we can help
            you build the perfect fitness space for your home.
          </p>
          <Link
            to="/"
            className="bg-green-500 p-1 md:p-2 lg:p-4 rounded-sm text-xs md:text-base lg:text-xl font-serif transition-transform hover:scale-x-110"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      <div className="mb-20">
        <img
          loading="lazy"
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          src="https://i.ibb.co/C7tvvRr/Screenshot-2024-07-13-171833.png"
          alt="Shirtless bodybuilder doing side plank exercise"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
