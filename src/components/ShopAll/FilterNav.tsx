

const FilterNav = () => {
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isbrandOpen, setbrandOpen] = useState(false);

  return (
    <div
      className={`w-full p-4 border-r border-gray-300`}
    >
      <h2 className="font-serif text-lg mb-4">FILTERS</h2>
      <hr className="mb-4" />

      <div className="mb-4">
        <h3
          className="font-bold text-base mb-2 flex justify-between items-center cursor-pointer"
          onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}
        >
          Availability
          <button className="text-sm">{isAvailabilityOpen ? "▲" : "▼"}</button>
        </h3>
        {isAvailabilityOpen && (
          <div className="ml-2 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              In stock (37)
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Out of stock (5)
            </label>
          </div>
        )}
      </div>

      <hr className="mb-4" />

      <div className="mb-4">
        <h3
          className="font-bold text-base mb-2 flex justify-between items-center cursor-pointer"
          onClick={() => setPriceOpen(!isPriceOpen)}
        >
          Price
          <button className="text-sm">{isPriceOpen ? "▲" : "▼"}</button>
        </h3>
        {isPriceOpen && (
          <div className="ml-2 space-y-2">
            {/* Add price filter options here */}
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $0 - $50
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $51 - $100
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $100 - $200
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $200 - $1000
            </label>
          </div>
        )}
      </div>

      <hr className="mb-4" />

      <div className="mb-4">
        <h3
          className="font-bold text-base mb-2 flex justify-between items-center cursor-pointer"
          onClick={() => setCategoryOpen(!isCategoryOpen)}
        >
          Category
          <button className="text-sm">{isCategoryOpen ? "▲" : "▼"}</button>
        </h3>
        {isCategoryOpen && (
          <div className="ml-2 space-y-2">
            {/* Add category filter options here */}
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Arc Trainers (4)
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ellipticals (4)
            </label>
          </div>
        )}
      </div>

      <hr className="mb-4" />

      <div className="mb-4">
        <h3
          className="font-bold text-base mb-2 flex justify-between items-center cursor-pointer"
          onClick={() => setbrandOpen(!isbrandOpen)}
        >
          Brand
          <button className="text-sm">{isbrandOpen ? "▲" : "▼"}</button>
        </h3>
        {isbrandOpen && (
          <div className="ml-2 space-y-2">
            {/* Add category filter options here */}
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Cybex(3)
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              ICG (4)
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Life FItness (27)
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterNav;
