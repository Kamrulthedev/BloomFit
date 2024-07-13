import FilterNav from "./FilterNav";

const ShopAll = () => {
  return (
    <div>
      <h1 className="text-3xl font-serif text-center p-6 lg:p-16">All SHOP</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 lg:h-[500px]">
          {/* Content for the first div */}
          <FilterNav></FilterNav>
        </div>

        <div className="col-span-3 w-full h-60 bg-black">
          {/* Content for the second div */}
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
