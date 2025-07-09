import React from "react";
const Header = () => {
  return (
    <div className="mt-36 lg:hidden text-center text-tcs-white text-5xl mx-auto font-helvetica-neue-medium tracking-wider">
      <div className="justify-center">
        <p className="mr-2">Crafted with</p>
        <div>
          <div className="  absolute lg:mx-auto translate-y-1 translate-x-[140px] lg:translate-x-1 -z-10 w-[189px] lg:w-[233px] h-[47px] lg:h-[63px] rounded-2xl bg-tcs-banana rotate-[-3deg] lg:rotate-[-4deg]"></div>
          <p className="text-tcs-pure-black mt-3 tracking-wide font-bold z-10">
            Purpose
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
