const benefits = [
  {
    id: 1,
    title: "High Quality",
    description:
      "Our products are made from the highest quality materials to ensure durability and longevity.",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description: "We offer competitive prices without compromising on quality.",
    image: "https://i.ibb.co/BzkcYbW/couple-training-together-gym.jpg",
  },
  {
    id: 3,
    title: "Customer Support",
    description:
      "Our dedicated customer support team is here to assist you with any queries.",
    image: "https://i.ibb.co/zbNBqKG/muscular-man-doing-push-ups-one-hand.jpg",
  },
];
const Benefit = () => {
  return (
    <div className="benefits-section p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Benefits of Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="benefit-card border p-4 rounded-lg shadow-lg bg-white"
          >
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
