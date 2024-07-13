import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Cardio",
    image:
      "https://i.ibb.co/nRBv8dD/young-woman-doing-fitness-sportswear.jpg",
    route: "/products?category=cardio",
  },
  {
    name: "Strength",
    image:
      "https://i.ibb.co/KG5pxx4/studio-portrait-bearded-brutal-male-isolated-gray-background.jpg",
    route: "/products?category=strength",
  },
  {
    name: "Accessories",
    image:
      "https://i.ibb.co/MNkXMj1/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg",
    route: "/products?category=accessories",
  },
  {
    name: "Outlet",
    image:
      "https://i.ibb.co/T1wp3qt/female-athlete-exercising-with-kettlebell-798657-9840.jpg",
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
    <div className="categories-section py-16 px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 ">
      {categories?.slice(0, 4).map((category) => (
        <button
          key={category.name}
          onClick={() => handleCategoryClick(category.route)}
        >
          <img loading="lazy"
            src={category.image}
            alt={category.name}
            className="w-72 hover:p-2 h-52 lg:h-72 object-cover  rounded-lg mb-2"
          />
          <p className="flex justify-start text-2xl font-serif uppercase">{category.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Categorie;
