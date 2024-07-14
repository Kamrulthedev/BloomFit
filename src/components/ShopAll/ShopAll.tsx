import { useState } from "react";
import FilterNav from "./FilterNav";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "E3 Elliptical Cross-Trainer",
    price: 29.99,
    image:
      "https://i.ibb.co/BTppCsB/e3-elliptical-track-2-0-callout-1000x1000.jpg",
  },
  {
    id: 2,
    name: "RS1 Lifecycle Exercise Bike",
    price: 49.99,
    image:
      "https://i.ibb.co/jzvP0Jr/rs1-recumbent-bike-track-2-0-callout-1000x1000.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image:
      "https://i.ibb.co/YZdgpLL/life-fitness-heat-performance-row-full-1000x1000-de6e306f-c9ae-4751-997d-628b869de530.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
    image:
      "https://i.ibb.co/Sy92KC6/t5-test-track2-0-2-9efbe2f2-2392-4177-966f-d4e0eeb43dff.jpg",
  },
];

const ShopAll = () => {
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
    handleSubmit();
  };

  const handleSubmit = () => {
    console.log('Selected sort value:', sortValue);
    // Perform your sort operation based on the selected value
  };
  return (
    <div>
      <h1 className="text-3xl font-serif text-center p-6 lg:p-16">All SHOP</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 lg:h-[500px]">
          {/* Content for the first div */}
          <FilterNav></FilterNav>
        </div>

        <div className="col-span-3 w-full ">
          {/* Content for the second div */}
          <div className="flex justify-between">
            <h1>50 Products</h1>
            <form className="flex items-center">
              <p className="text-slate-500">Sort by</p>
              <select
                id="sort"
                name="sort"
                className="mt-1 block w-36 pl-3  pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={sortValue}
                onChange={handleSortChange}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </form>
          </div>
          {/* map products */}
          <div className="container mx-auto p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
