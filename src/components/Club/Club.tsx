const Club = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] lg:h-[450px] mb-10">
        <div className="absolute top-0 left-0 w-full lg:h-full bg-black bg-opacity-20 z-10 flex justify-self-stretch p-7">
          <div className=" lg:w-[450px] lg:h-[200px] w-[200px] h-[200px] bg-white rounded my-6 lg:my-48 mx-3 lg:mx-10 p-1 lg:p-4 space-y-3">
            <p className="lg:text-base text-xs font-bold text-start mt-8">
              JOIN THE CLUB
            </p>
            <h1 className="text-sm text-start text-black font-serif">
              Sign up is FREE and we will send you a 10% Off coupon for your
              first order.
            </h1>
            <div className="flex gap-8">
              <input
                type="text"
                placeholder="Your e-mail....."
                className="w-full max-w-60 p-3 border-2"
              />
              <button className="p-4 bg-green-600 text-lg font-serif">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className=" mb-20">
          <div>
            <img
              className="w-full h-[300px] lg:h-[500px]"
              src="https://i.ibb.co/27TGHJF/Screenshot-2024-07-13-170558.png"
              alt="Shirtless bodybuilder doing side plank exercise"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
