const images = [
  "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
  "https://i.ibb.co/BzkcYbW/couple-training-together-gym.jpg",
  "https://i.ibb.co/zbNBqKG/muscular-man-doing-push-ups-one-hand.jpg",
  "https://i.ibb.co/xjdV2Mn/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg"
];

const ImageGallery = () => {
  return (
    <div className="image-gallery p-8 bg-gray-100">
      <h2 className="lg:text-3xl font-serif text-center mb-8 uppercase">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
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
