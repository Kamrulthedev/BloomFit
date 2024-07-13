import { Carousel } from "antd";
import { Link, useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Treadmill",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    description: "High-quality treadmill for your cardio workouts.",
  },
  {
    id: 2,
    name: "Dumbbell Set",
    image: "https://i.ibb.co/BzkcYbW/couple-training-together-gym.jpg",
    description: "Complete set of dumbbells for strength training.",
  },
  {
    id: 3,
    name: "Yoga Mat",
    image: "https://i.ibb.co/zbNBqKG/muscular-man-doing-push-ups-one-hand.jpg",
    description: "Comfortable yoga mat for all types of exercises.",
  },
];

const FeaturedProduct = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id: any) => {
    navigate(`/product/${id}`);
  };

  const handleExploreMore = () => {
    navigate("/products");
  };
  return (
    <div className="relative w-full h-[300px] lg:h-[500px] mb-10">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 flex justify-end ">
        <div className=" lg:w-[400px] lg:h-[360px] w-full h-[100px] bg-white my-28 mx-20">
          <p className="text-base font-serif text-center lg:mt-20">
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
              to=""
              className="bg-fuchsia-500 p-4 rounded-sm text-xl font-serif"
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
            src="https://i.ibb.co/PjWCwQ4/3d-gym-equipment-23-2151114250.jpg"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
