import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const Navber: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      {/* scroll down navber */}
      <div
        className={`text-white text-sm bg-green-700 text-center font-serif hidden md:block p-3 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        BUILD YOUR DREAM HOME GYM
      </div>
      <div className="container mx-auto bg-black p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white lg:hidden"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div className="text-white font-bold text-xl ml-4 lg:ml-0">
              <Link to="/" className="uppercase font-serif lg:text-3xl p-3 ">
                BloomFit
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="mt-4 lg:mt-0 hover:border hover:rounded-full ">
              <div className="relative w-full lg:w-80 ">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-full w-20 px-4 py-2 p-3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none lg:w-80"
                />
                <button onClick={() => setIsShow(!isShow)}>
                  <FaSearch className="absolute top-1/2 right-3 hidden sm:block md:block transform -translate-y-1/2 text-gray-400" />
                </button>
              </div>
            </div>

            <button>
              <Link
                className=" hover:text-black font-bold border-2 p-2 rounded-2xl flex hover:bg-slate-100 text-white items-center gap-1"
                to=""
              >
                <FaUser />
                <p className="hidden md:block">Account</p>
              </Link>
            </button>
            <button>
              <Link
                className="font-bold hover:border-none hover:text-white border-2 p-2 rounded-2xl flex hover:bg-slate-700 bg-white text-black items-center gap-1"
                to="cart"
              >
                <FaShoppingCart />
                <p className="hidden md:block">$: 00.00</p>
                <p className="hidden md:block">(100)</p>
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden bg-white p-4`}
      >
        <div className="flex flex-col items-start text-black text-lg font-serif ">
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to="/shop-all"
          >
            SHOP ALL
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to=""
          >
            STRENGTH
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to=""
          >
            ACCESSORIES
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to="/about-us"
          >
            ABOUT US
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to=""
          >
            TOOLS
          </Link>
          <Link
            onClick={toggleMenu}
            className="hover:underline cursor-pointer py-2 w-full border-b-2"
            to=""
          >
            FOR FACILITY
          </Link>
          <Link
            onClick={toggleMenu}
            to='/productmanagement'
            className="relative cursor-pointer flex border-b-2 gap-2 items-center hover:border p-2 rounded-full"
          >
            <p className="text-lg">
              <AiOutlineProduct />
            </p>
            <h1 className="font-serif text-base">Product Management</h1>
          </Link>
        </div>
      </div>

      {/* Fixed Navbar */}
      <div
        className={`bg-gray-950 flex justify-between hidden lg:flex ${
          isScrolled ? "fixed w-full top-0 left-0 z-40" : ""
        }`}
      >
        <div className="items-center p-6 text-white flex md:space-x-6 text-lg font-serif">
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110 cursor-pointer"
            to="/shop-all"
          >
            SHOP ALL
          </Link>
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110  cursor-pointer"
            to=""
          >
            STRENGTH
          </Link>
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110  cursor-pointer"
            to=""
          >
            ACCESSORIES
          </Link>
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110  cursor-pointer"
            to="/about-us"
          >
            ABOUT US
          </Link>
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110  cursor-pointer"
            to=""
          >
            TOOLS
          </Link>
          <Link
            className="hover:underline hover:transition-transform hover:scale-x-110  cursor-pointer"
            to=""
          >
            FOR FACILITY
          </Link>
        </div>
        <div className="flex items-center mt-2 md:mt-0 gap-10 text-white p-4">
          <Link
            to='/productmanagement'
            className="relative cursor-pointer flex gap-2 items-center hover:border p-2 rounded-full"
          >
            <p className="text-lg">
              <AiOutlineProduct className="text-xl font-bold" />
            </p>
            <h1 className="font-serif text-base">Product Management</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
