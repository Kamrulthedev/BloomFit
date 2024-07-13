const benefits = [
  {
    id: 1,
    title: "High Quality",
    description:
      "Our products are crafted from the highest quality materials, ensuring exceptional durability and longevity. We meticulously select premium components and employ state-of-the-art manufacturing processes to guarantee that every item meets our rigorous standards. From the initial design phase.",
    image:
      "https://i.ibb.co/D82bSWx/Screenshot-2024-07-13-201748.png",
  },
  {
    id: 2,
    title: "Customer Satisfaction Guarantee",
    description:
      "Your satisfaction is our top priority. We stand behind our products and services with a satisfaction guarantee. If for any reason you are not completely satisfied with your purchase, our customer support team will work diligently to resolve any issues to your satisfaction.",
    image:
      "https://i.ibb.co/wRKxWbt/front-view-fit-man-posing-while-lifting-tank-top.jpg",
  },
];
const Benefit = () => {
  return (
    <div className="benefits-section p-8 bg-gray-100 ">
      <h2 className="lg:text-4xl font-serif text-center mb-8 uppercase">
        Benefits
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="benefit-card border rounded-lg h-96 shadow-lg bg-white flex gap-3"
          >
            <img
              loading="lazy"
              src={benefit.image}
              alt={benefit.title}
              className="w-1/2 h-full object-cover  mb-4"
            />
            <div className="w-1/2 p-5 space-y-3">
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-600 h-full max-h-64 overflow-y-auto">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
