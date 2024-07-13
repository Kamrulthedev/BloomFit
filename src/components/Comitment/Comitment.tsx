import { AiFillLike } from "react-icons/ai";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Comitment = () => {
  return (
    <div className="lg:p-16">
      <div className="w-full flex lg:flex gap-5 mb-10">
        <div className="w-1/2 text-center space-y-4">
          <div className="flex justify-center">
            <AiFillLike className="text-2xl" />
          </div>
          <h1>100,000+ FACILITIES</h1>
          <p>
            From health clubs and gyms to pro sports teams and top colleges,{" "}
            <br />
            fitness facilities in 165+ countries feature the strength <br /> and
            cardio equipment of Life Fitness.
          </p>
        </div>
        <div className="1/2 text-center space-y-4">
          <div className="flex justify-center">
            {" "}
            <FaCircleDollarToSlot className="text-2xl" />
          </div>

          <h1>FITNESS LEADERSHIP</h1>
          <p>
            Life Fitness has been a pioneer in fitness equipment, <br />{" "}
            innovating across cardio equipment, connected consoles, <br />{" "}
            digital content and connected strength equipment.
          </p>
        </div>
      </div>
      <div className="text-center text-sm">
        <p>
          *Your rate will be 0–30% APR based on credit, and is subject to an
          eligibility check. Payment options through Affirm are provided by
          these <br /> lending partners:{" "}
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
