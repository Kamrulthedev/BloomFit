const images = [
  "https://i.ibb.co/fk844qP/john-arano-h4i9-G-de7-Po-unsplash.jpg",
  "https://i.ibb.co/f4MB2KF/sam-sabourin-Pi-FA6-HIAf-BA-unsplash.jpg",
  "https://i.ibb.co/341qpJr/toni-g-6-T-6h3-Z39-Ls-unsplash.jpg",
  "https://i.ibb.co/1G6493b/Screenshot-2024-07-13-145315.png",
  "https://i.ibb.co/Zmdh1Xr/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
];

const images1 = [
  "https://i.ibb.co/Yhf8Rg5/Screenshot-2024-07-13-145608.png",
  "https://i.ibb.co/VBdGsDF/Screenshot-2024-07-13-144505.png",
  "https://i.ibb.co/cy5c0s4/Screenshot-2024-07-13-143736.png",
  "https://i.ibb.co/cy5c0s4/Screenshot-2024-07-13-143736.png",
];

const ImageGallery = () => {
  return (
    <div className="image-gallery p-4 sm:p-8 bg-gray-100">
    <h2 className="text-xl lg:text-3xl font-serif text-center mb-4 lg:mb-8 uppercase">
      Gallery
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mb-4">
      {images1.slice(0, 3).map((image, index) => (
        <div key={index} className="relative overflow-hidden h-48 lg:h-96">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden h-32 sm:h-48 lg:h-60">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ImageGallery;
