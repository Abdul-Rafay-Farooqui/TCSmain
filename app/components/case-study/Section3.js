import React from "react";

const Section3 = ({ section }) => {
  return (
    <div>
      {section?.image1 && section?.image2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[88px] lg:max-w-full ml-2 lg:ml-[90px] mr-2 lg:mr-[70px] lg:max-h-[800px]">
          <div className="sm:h-[800px]">
            <img
              src={section?.image1}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[800px] ">
            <img
              src={section?.image2}
              className="object-cover size-full rounded-[33px]"
            />
          </div>
        </div>
      )}
      {section?.image3 && (
        <div className="mr-2 lg:mr-[70px] ml-2 lg:ml-[90px] mt-5 lg:mt-4 lg:max-h-[500px] bg-tcs-black rounded-3xl lg:max-w-full">
          <img
            src={section?.image3}
            className="w-full object-cover sm:h-[360px] rounded-[33px]"
          />
        </div>
      )}
      {section?.image4 && section?.image5 && section.image6 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 lg:mt-[62px] lg:max-w-full ml-2 lg:ml-[90px] mr-2 lg:mr-[70px] lg:max-h-[440px] ">
          <div className="sm:h-[440px]">
            <img
              src={section?.image4}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[440px]">
            <img
              src={section?.image5}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[440px]">
            <img
              src={section?.image6}
              className="object-cover size-full rounded-[33px]"
            />
          </div>
        </div>
      )}
      {section?.image7 && section?.image8 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 lg:mt-4 lg:max-w-full ml-2 lg:ml-[90px] mr-2 lg:mr-[70px] lg:max-h-[671px]">
          <div className="sm:h-[671px]">
            <img
              src={section?.image7}
              className="object-cover size-full rounded-[33px] mb-5 lg:mb-0"
            />
          </div>
          <div className="sm:h-[671px] ">
            <img
              src={section?.image8}
              className="object-cover size-full rounded-[33px]"
            />
          </div>
        </div>
      )}
      <div className="sm:flex relative mt-10 lg:mt-20 justify-center mb-10 ml-2 lg:ml-[90px] mr-2 lg:mr-[70px]">
        <div className="sm:sticky top-0 z-[99999999] ml-4 sm:h-screen sm:w-1/2">
          <h3 className="text-3xl lg:text-xl font-light">{section?.title}</h3>
          <ul className="text-xs mt-9">
            {section?.tags?.map((item, i) => (
              <li key={i} className="text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-4 lg:ml-16 mr-4 lg:mr-0 mt-6 sm:mt-1 sm:w-1/2 text-justify h-auto">
          <p className="text-sm mt-0 leading-relaxed">{section?.text}</p>
          <p className="text-sm mt-0 leading-relaxed">{section?.text}</p>
          <p className="text-sm mt-0 leading-relaxed">{section?.text}</p>
          <p className="text-sm mt-0 leading-relaxed">{section?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
