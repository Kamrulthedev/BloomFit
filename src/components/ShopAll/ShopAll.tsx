import FilterNav from "./FilterNav";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
    image: "https://via.placeholder.com/300",
  },
];

const ShopAll = () => {
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
            <h1>Products: 30</h1>
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700"
              >
                Sort by:
              </label>
              <select
                id="sort"
                name="sort"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option></option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
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
