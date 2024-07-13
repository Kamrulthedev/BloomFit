import { AiFillLike } from "react-icons/ai";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Comitment = () => {
  return (
    <div className="p-6 lg:p-16">
    <div className="w-full flex flex-col lg:flex-row gap-5 mb-5 lg:mb-10">
      <div className="lg:w-1/2 text-center space-y-4">
        <div className="flex justify-center">
          <AiFillLike className="text-2xl" />
        </div>
        <h1 className="text-lg font-semibold">100,000+ FACILITIES</h1>
        <p className="text-sm lg:text-base">
          From health clubs and gyms to pro sports teams and top colleges, 
          fitness facilities in 165+ countries feature the strength 
          and cardio equipment of Life Fitness.
        </p>
      </div>
      <div className="lg:w-1/2 text-center space-y-4">
        <div className="flex justify-center">
          <FaCircleDollarToSlot className="text-2xl" />
        </div>
        <h1 className="text-lg font-semibold">FITNESS LEADERSHIP</h1>
        <p className="text-sm lg:text-base">
          Life Fitness has been a pioneer in fitness equipment, 
          innovating across cardio equipment, connected consoles, 
          digital content, and connected strength equipment.
        </p>
      </div>
    </div>
    <div className="text-center text-sm">
      <p>
        *Your rate will be 0–30% APR based on credit, and is subject to an
        eligibility check. Payment options through Affirm are provided by
        these <br /> lending partners: 
        <Link className="underline" to="https://kamrul-hassan-32b47.web.app/">
          kamrulhassan.com
        </Link>
        . Options depend on your purchase amount, and a down payment may be
        required
      </p>
    </div>
  </div>
  );
};

export default Comitment;
