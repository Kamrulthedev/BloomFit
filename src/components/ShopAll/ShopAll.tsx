import { useEffect, useState } from "react";
import FilterNav from "./FilterNav";
import ProductCard from "./ProductCard";

export const products = [
  {
    id: 1,
    name: "E3 Elliptical Cross-Trainer",
    price: 10,
    image:
      "https://i.ibb.co/BTppCsB/e3-elliptical-track-2-0-callout-1000x1000.jpg",
  },
  {
    id: 2,
    name: "RS1 Lifecycle Exercise Bike",
    price: 49,
    image:
      "https://i.ibb.co/jzvP0Jr/rs1-recumbent-bike-track-2-0-callout-1000x1000.jpg",
  },
  {
    id: 3,
    name: "T5 Treadmill",
    price: 19,
    image:
      "https://i.ibb.co/YZdgpLL/life-fitness-heat-performance-row-full-1000x1000-de6e306f-c9ae-4751-997d-628b869de530.jpg",
  },
  {
    id: 4,
    name: "Heat Row",
    price: 99,
    image:
      "https://i.ibb.co/Sy92KC6/t5-test-track2-0-2-9efbe2f2-2392-4177-966f-d4e0eeb43dff.jpg",
  },
  {
    id: 3,
    name: "T5 Treadmill",
    price: 29,
    image:
      "https://i.ibb.co/YZdgpLL/life-fitness-heat-performance-row-full-1000x1000-de6e306f-c9ae-4751-997d-628b869de530.jpg",
  },
  {
    id: 4,
    name: "Heat Row",
    price: 100,
    image:
      "https://i.ibb.co/Sy92KC6/t5-test-track2-0-2-9efbe2f2-2392-4177-966f-d4e0eeb43dff.jpg",
  },
];

const ShopAll = () => {
  const [sortValue, setSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    const event = {
      target: { value: sortValue } as EventTarget & HTMLSelectElement,
    };
    handleSortChange(event as React.ChangeEvent<HTMLSelectElement>);
  }, [products]);

  const handleSortChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortValue(value);
    handleSubmit(value);
  };

  const handleSubmit = (sortValue: any) => {
    console.log(sortValue)
    let sorted = [...products];
    if(sortValue === 'all-products'){
      sorted
    }
    else if (sortValue === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-serif text-center p-6 lg:p-16">All SHOP</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 lg:h-[500px] sticky top-5 left-0">
          {/* Content for the first div */}
          <FilterNav></FilterNav>
        </div>

        <div className="col-span-3 w-full ">
          {/* Content for the second div */}
          <div className="flex justify-between">
            <h1>{sortedProducts.length} Products</h1>
            <form className="flex items-center gap-1">
              <p className="text-slate-600">Sort by</p>
              <select
                id="sort"
                name="sort"
                className="mt-1 block w-36 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={sortValue}
                onChange={handleSortChange}
              >
                <option value="all-products">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </form>
          </div>
          {/* map products */}
          <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
