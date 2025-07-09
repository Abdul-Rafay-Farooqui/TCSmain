import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed left-0 top-0 z-[99999999999999999] flex h-full w-full items-center justify-center bg-[#dbf900]">
      <img
        className="w-36 md:w-56"
        alt="TCS logo"
        src="/image/splash.gif"
      ></img>
    </div>
  );
};

export default SplashScreen;
