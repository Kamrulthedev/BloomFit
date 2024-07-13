import { Carousel } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Bannar = () => {
  return (
    <div className="relative w-full">
      {/* flex flex-col justify-center items-center */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
        {/* utils */}
        <div className="lg:mt-72 ml-20 shadow-lg">
          <h1 className="text-white text-xs md:text-sm lg:text-base font-bold">
            BRING THE CLUB EXPERIENCE HOME
          </h1>
          <h2 className="text-white text-xl md:text-3xl lg:text-6xl font-serif mt-4">
            CLUB SERIES+ <br /> CARDIO EQUIPMENT
          </h2>
          <button className="mt-6 bg-white text-black font-bold py-2 px-4 rounded">
            SHOP NOW
          </button>
        </div>
        
      </div>

      <Carousel
        className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
        autoplay
        // infiniteLoop
        // showThumbs={false}
        // showStatus={false}
      >
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            src="https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            src="https://i.ibb.co/BzkcYbW/couple-training-together-gym.jpg"
            alt="Couple training together in gym"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            src="https://i.ibb.co/zbNBqKG/muscular-man-doing-push-ups-one-hand.jpg"
            alt="Muscular man doing push-ups with one hand"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px]"
            src="https://i.ibb.co/xjdV2Mn/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg"
            alt="Young healthy man athlete doing exercise with ropes in gym"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Bannar;
