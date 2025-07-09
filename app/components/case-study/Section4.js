import React from "react";

const Section4 = ({ section }) => {
  return (
    <div>
      {section?.image1 && section?.image2 && section.image3 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[62px] lg:max-w-full ml-2 lg:ml-[90px]  mr-2 lg:mr-[70px] lg:max-h-[440px] ">
          <div className="sm:h-[440px]">
            <img
              src={section?.image1}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[440px]">
            <img
              src={section?.image2}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[440px]">
            <img
              src={section?.image3}
              className="object-cover size-full rounded-[33px]"
            />
          </div>
        </div>
      )}
      {section?.image4 && (
        <div className="mr-2 lg:mr-[70px] ml-2 lg:ml-[90px] mt-5 lg:mt-4 lg:max-h-[500px] bg-tcs-black rounded-3xl max-w-full">
          <img
            src={section?.image4}
            className="w-full object-cover h-[360px] rounded-[33px]"
          />
        </div>
      )}
      <div className="sm:grid place-items-center">
        <div className="mt-14 lg:mt-[165px] text-center text-3xl lg:text-[36px] leading-tight mb-12 font-light ml-3 max-w-xl">
          <p>{section?.bottomText}</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
