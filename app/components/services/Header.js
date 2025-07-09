import React from "react";
import content from "@content/services.json";
const Header = () => {
  const { mainText1, mainText2, mainTextIcon } = content;
  return (
    <div className=" mt-32 lg:mt-60 max-w-[350px] sm:max-w-sm lg:max-w-3xl text-center leading-tight text-tcs-white lg:pr-20 text-[45px] lg:text-6xl mx-auto font-bold lg:tracking-normal">
      <p className="pt-4 h-[134px] md:h-[80px] overflow-hidden">
        <span className="relative  animate-plateUp">Services designed to</span>
      </p>
      <div className="h-[57px] sm:h-[90px] overflow-hidden flex sm:pt-2 justify-center">
        <p>
          <span className="relative animate-plateUp"> grow</span>
        </p>
        <div className="r-transition h-20 w-12 lg:w-[100px] mx-2 lg:mx-5 pb-5 sm:pb-0 lg:mt-0 relative animate-plateUp">
          <img src={mainTextIcon} className=" size-full object-contain spin" />
        </div>
        <p className="mr-2 lg:mr-5">
          <span className="relative animate-plateUp">your</span>
        </p>
        <div className="hidden lg:block ">
          <div className="relative">
            <div className="absolute translate-x-1 -z-10 w-[250px] h-16 overflow-hidden rounded-2xl bg-tcs-banana rotate-[-4deg]  animate__animated animate__zoomIn animate__delay-1s animate__faster"></div>
          </div>
          <p className="text-tcs-pure-black tracking-wide h-[80px] z-10">
            <span className="relative animate-plateUp">business</span>
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative">
          <div className="relative translate-y-2 justify-center mx-auto -z-10 w-[185px] h-12 rounded-2xl bg-tcs-banana rotate-[-4deg] animate__animated animate__zoomIn animate__delay-1s animate__faster"></div>
        </div>
        <p className="relative -translate-y-11 text-tcs-pure-black tracking-wide h-16  overflow-hidden z-50">
          <span className="relative text-[40px] animate-plateUp">business</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
