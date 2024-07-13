import { Carousel } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Bannar = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
        {/* utils */}
        <div className="lg:mt-52 md:mt-32 mt-24 ml-20">
          <h1 className="text-white text-xs md:text-sm lg:text-base font-bold">
            BRING THE CLUB EXPERIENCE HOME
          </h1>
          <h2 className="text-white text-xl md:text-3xl lg:text-6xl font-serif mt-4">
            CLUB SERIES+ <br /> CARDIO EQUIPMENT
          </h2>
          <button className="mt-6 bg-white text-black font-serif py-2 px-4">
            SHOP NOW
          </button>
        </div>
      </div>

      <Carousel className="w-full h-[300px] md:h-[400px] lg:h-[700px]" autoplay>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/M9CxVFX/Screenshot-2024-07-13-144418.png"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/34hYMY1/Screenshot-2024-07-13-144443.png"
            alt="Couple training together in gym"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/4gGRwjX/Screenshot-2024-07-13-144047.png"
            alt="Muscular man doing push-ups with one hand"
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/LhLsgBD/Screenshot-2024-07-13-144537.png"
            alt="Young healthy man athlete doing exercise with ropes in gym"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Bannar;
