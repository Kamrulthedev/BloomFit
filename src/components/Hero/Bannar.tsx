import { Carousel } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 flex items-center justify-center md:justify-start lg:justify-start">
        {/* utils */}
        <div className="text-center lg:p-14 md:text-left md:ml-16 lg:-mt-20 md:-mt-10">
          <h1 className="text-white text-xs md:text-sm lg:text-base font-bold">
            BRING THE CLUB EXPERIENCE HOME
          </h1>
          <h2 className="text-white text-xl md:text-3xl lg:text-6xl font-serif mt-4">
            CLUB SERIES+ <br /> CARDIO EQUIPMENT
          </h2>
          <Link to={"/shop-all"}>
            <button className="mt-6 bg-white text-black font-serif p-2 lg:py-4 px-5 transition-transform hover:scale-x-110">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>

      <Carousel className="w-full h-[300px] md:h-[400px] lg:h-[700px]" autoplay>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/M9CxVFX/Screenshot-2024-07-13-144418.png"
            alt="Shirtless bodybuilder doing side plank exercise"
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/34hYMY1/Screenshot-2024-07-13-144443.png"
            alt="Couple training together in gym"
          />
        </div>
        <div>
          <img
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] lg:h-[700px] object-cover"
            src="https://i.ibb.co/4gGRwjX/Screenshot-2024-07-13-144047.png"
            alt="Muscular man doing push-ups with one hand"
          />
        </div>
        <div>
          <img
            loading="lazy"
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
