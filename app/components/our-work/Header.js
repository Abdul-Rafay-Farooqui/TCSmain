import React from "react";
const Header = () => {
  return (
    <div className="mt-36 lg:mt-56 text-center text-tcs-white text-[45px] lg:text-6xl mx-auto font-helvetica-neue-medium tracking-normal">
      <div className="lg:flex lg:justify-center">
        <p className="mr-2 lg:mr-5 h-[70px] overflow-hidden">
          <span className="relative  animate-plateUp">Crafted with</span>
        </p>
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute translate-x-1 -z-10 w-[230px] overflow-hidden h-16 rounded-2xl bg-tcs-banana rotate-[-4deg] animate__animated animate__zoomIn animate__delay-1s animate__faster"></div>
          </div>
          <p className="h-[80px] text-tcs-pure-black font-bold tracking-wide z-10 overflow-hidden ">
            <span className="relative  animate-plateUp">Purpose</span>
          </p>
        </div>
      </div>
      <div className="lg:hidden h-[110px] ">
        <div className="relative">
          <div className="mx-auto -z-10 w-[182px] h-12 overflow-hidden rounded-2xl bg-tcs-banana rotate-[-4deg] p-0  animate__animated animate__zoomIn animate__delay-1s animate__faster"></div>
        </div>
        <p className="overflow-hidden relative bottom-[55px] text-tcs-black text-[43px] font-bold tracking-wide z-10">
          <span className="relative  animate-plateUp">Purpose</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
