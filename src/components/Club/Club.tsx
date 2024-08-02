const Club = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] lg:h-[450px]">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-5 z-10 flex justify-center lg:my-32 lg:-ml-48 items-center p-4 lg:p-7">
          <div className="w-full max-w-lg bg-white rounded p-4 space-y-3">
            <p className="text-base font-bold text-start">JOIN THE CLUB</p>
            <h1 className="text-sm text-start text-black font-serif">
              Sign up is FREE and we will send you a 10% Off coupon for your
              first order.
            </h1>
            <div className="flex flex-col lg:flex-row gap-3">
              <input
                type="text"
                placeholder="Your e-mail....."
                className="w-full p-3 border-2 lg:rounded-none"
              />
              <button className="p-3 bg-green-600 text-white rounded-md transition-transform hover:scale-x-110">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          className="w-full h-full object-cover"
          src="https://i.ibb.co/27TGHJF/Screenshot-2024-07-13-170558z.png"
          alt="Shirtless bodybuilder doing side plank exercise"
        />
      </div>
    </div>
  );
};

export default Club;
