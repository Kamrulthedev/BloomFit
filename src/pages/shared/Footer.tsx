import { useState } from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaArrowsUpDown } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const year = currentDateTime.getFullYear();
  return (
    <div className="bg-gray-900 text-gray-400  lg:h-[500px]">
      <div className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Links */}
          <div>
            <h6 className="text-white font-serif mb-4">COMPANY LINKS</h6>
            <div className="text-base">
              <a className="inline-block mb-2" href="">
                Privacy Policy
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                Terms of Service
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                Accessibility
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                CA Transparency Act
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                CA Proposition 65 WARNING
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                ISO Certificate
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                Terms & Conditions of Sale
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                Affiliate Program
              </a>
              <br />
              <a className="inline-block mb-2" href="">
                Financing - Life Fitness
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h6 className="text-white font-serif mb-4">CUSTOMER SERVICE</h6>
            <div className="text-base">
              <a className="inline-block mb-2">FAQ</a>
              <br />
              <a className="inline-block mb-2">Contact Us</a>
              <br />
              <a className="inline-block mb-2">Returns & Cancellations</a>
              <br />
              <a className="inline-block mb-2">Request Service</a>
              <br />
              <a className="inline-block mb-2">Custom Home Gym</a>
              <br />
              <a className="inline-block mb-2">Product Registration</a>
              <br />
              <a className="inline-block mb-2">Referrals</a>
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h6 className="text-white font-serif mb-4">SITE LINKS</h6>
            <div className="text-base">
              <a href="#" className="inline-block mb-2">
                Search
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Commercial Site
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Military & First Responder Discount
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Dealer Application
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Find a Store
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Cardio
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Strength
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Accessories
              </a>
              <br />
              <a href="#" className="inline-block mb-2">
                Outlet
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h6 className="text-white font-serif mb-4">CONNECT</h6>
            <div className="text-base">
              <p className="inline-block mb-2">800-527-6063 (Sales)</p>
              <br />
              <p className="inline-block mb-2">800-527-6065 x2 (Support)</p>
              <br />
              <Link className="inline-block mb-2 hover:underline" to="">
                More Contact Options
              </Link>{" "}
              <br />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3">
              <a
                href="#"
                className="text-gray-400 border p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 border p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center"
              >
                <LuInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 border p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 border p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-gray-400 border p-4 hover:bg-slate-300 hover:text-black flex justify-center items-center"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <button className="flex items-center gap-3 text-base font-bold">
              <h1>Bloom Shop</h1>
              <FaArrowsUpDown />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p>© {year} - Bloom Fitness // All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
