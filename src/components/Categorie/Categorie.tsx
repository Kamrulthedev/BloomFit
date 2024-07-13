import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cardio",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    route: "/products?category=cardio",
  },
  {
    name: "Strength",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    route: "/products?category=strength",
  },
  {
    name: "Accessories",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
    route: "/products?category=accessories",
  },
  {
    name: "Outlet",
    image:
      "https://i.ibb.co/qyKwgfP/shirtless-bodybuilder-doing-side-plank-exercise-7502-4749.jpg",
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

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  return (
    <div className="categories-section p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {categories?.slice(0, 3).map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category.route)}
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full hover:p-2 h-48 object-cover  rounded-lg mb-4"
          />
        </button>
      ))}
    </div>
  );
};

export default Categorie;
