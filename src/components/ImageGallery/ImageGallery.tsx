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
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <animated.div style={props} className="image-gallery p-8 bg-gray-100">
      <h2 className="text-3xl font-serif text-center mb-8 uppercase">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* First column */}
        <div className="w-full">
          {images1.slice(2, 3).map((image, index) => (
            <div key={index} className="relative overflow-hidden h-[400px]">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Second column */}
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 grid grid-cols-2 gap-2">
            {images1.slice(0, 2).map((image, index) => (
              <div key={index} className="relative overflow-hidden h-[200px]">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden h-[200px]">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
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