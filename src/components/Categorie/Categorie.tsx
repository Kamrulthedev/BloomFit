import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cardio",
    image:
      "https://i.ibb.co/dM27WLh/studio-portrait-bearded-brutal-male-isolated-gray-background.jpg",
    route: "/products?category=cardio",
  },
  {
    name: "Strength",
    image:
      "https://i.ibb.co/zNjnkwg/young-woman-doing-fitness-sportswear.jpg",
    route: "/products?category=strength",
  },
  {
    name: "Accessories",
    image:
      "https://i.ibb.co/0tV7mds/Screenshot-2024-07-13-200749.png",
  },
  {
    name: "Outlet",
    image:
      "https://i.ibb.co/VWpvfKJ/yy.png",
    route: "/products?category=outlet",
  },
  {
    name: "Tools",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    route: "/products?category=tools",
  },
  {
    name: "For Facility",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    route: "/products?category=for-facility",
  },
];

const Categorie = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route : any) => {
    navigate(route);
  };

  return (
    <div className="categories-section py-16 px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {categories?.slice(0, 4).map((category) => (
      <button
        key={category.name}
        onClick={() => handleCategoryClick(category.route)}
        className="flex flex-col items-center"
      >
        <img
          loading="lazy"
          src={category.image}
          alt={category.name}
          className="w-full h-32 sm:h-48 md:h-52 lg:h-72 object-cover rounded-lg mb-2 transition-transform hover:scale-x-110"
        />
        <p className="text-lg sm:text-xl md:text-2xl font-serif uppercase">{category.name}</p>
      </button>
    ))}
  </div>
  );
};

export default Categorie;
