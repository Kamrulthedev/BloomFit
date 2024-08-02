import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/fk844qP/john-arano-h4i9-G-de7-Po-unsplash.jpg",
  "https://i.ibb.co/f4MB2KF/sam-sabourin-Pi-FA6-HIAf-BA-unsplash.jpg",
];

const images1 = [
  "https://i.ibb.co/Yhf8Rg5/Screenshot-2024-07-13-145608.png",
  "https://i.ibb.co/VBdGsDF/Screenshot-2024-07-13-144505.png",
  "https://i.ibb.co/cy5c0s4/Screenshot-2024-07-13-143736.png",
  "https://i.ibb.co/cy5c0s4/Screenshot-2024-07-13-143736.png",
  "https://i.ibb.co/cy5c0s4/Screenshot-2024-07-13-143736.png",
  "https://i.ibb.co/Yhf8Rg5/Screenshot-2024-07-13-145608.png",
];

const ImageGallery = () => {
  const [visible, setVisible] = useState(false);

  const props = useSpring({
    opacity: visible ? 12 : 8,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <animated.div style={props} className="image-gallery p-8 bg-gray-100">
      <h2 className="lg:text-3xl font-serif text-center mb-8 uppercase">
        Gallery
      </h2>

      <div className="grid grid-cols-2 gap-2">
        {/* first div */}
        <div>
          {images1.slice(2, 3).map((image, index) => (
            <div
              key={index}
              className="relative md:overflow-auto lg:overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}` }
                className="w-full lg:h-full md:h-[310px] object-cover hover:scale-x-110 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* second div */}
        <div>
        <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-2 gap-2 mb-2 lg:h-[184px]">
            {images1.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className="relative md:overflow-auto lg:overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-x-110 transition-transform"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-2 gap-2 lg:h-[184px]">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-x-105 transition-transform"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ImageGallery;
