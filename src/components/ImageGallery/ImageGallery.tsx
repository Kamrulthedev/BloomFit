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
    <div className="image-gallery p-8 bg-gray-100 md:h-[750px]">
      <h2 className="lg:text-3xl font-serif text-center mb-8 uppercase">
        Gallery
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-96 mb-2">
        {images1.slice(0, 3).map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
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
