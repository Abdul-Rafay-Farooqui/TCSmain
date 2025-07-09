import React from "react";

const Section1 = ({ section }) => {
  return (
    <div>
      {section?.image1 && (
        <div className="ml-2 lg:ml-[90px] mr-2 lg:mr-[70px] mt-16 max-w-full max-h-[800px] bg-tcs-black rounded-3xl ">
          <img
            src={section?.image1}
            className="w-full object-fill sm:h-[800px] rounded-[33px]"
          />
        </div>
      )}
      {section?.image2 && section?.image3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 ml-2 mr-2 lg:mr-[70px] sm:mx-5  lg:mt-[88px] lg:max-w-full lg:ml-[90px] lg:max-h-[800px]">
          <div className="sm:h-[800px] mb-5 lg:mb-0">
            <img
              src={section?.image2}
              className="object-cover w-full sm:h-[800px] rounded-[33px]"
            />
          </div>
          <div className="lg:h-[800px] ">
            <img
              src={section?.image3}
              className="object-cover size-full rounded-[33px]"
            />
          </div>
        </div>
      )}
      {section?.image4 && (
        <div className="mr-2 lg:mr-[70px] ml-2 lg:ml-[90px] mt-5 lg:mt-4 lg:max-h-[500px] bg-tcs-black rounded-3xl lg:max-w-full">
          <img
            src={section?.image4}
            className="w-full object-cover sm:h-[360px] rounded-[33px]"
          />
        </div>
      )}
      <div className="sm:flex relative mt-10 lg:mt-20 justify-center mb-10 lg:ml-[120px] lg:mr-[130px]">
        <div className="sm:sticky top-0 z-[99999999] ml-4 sm:h-screen sm:w-1/2">
          <h3 className="text-3xl lg:text-4xl font-light">{section?.title}</h3>
          <ul className="text-xs mt-9">
            {section?.tags?.map((item, i) => (
              <li key={i} className="text-xs">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-4 lg:ml-16 mr-4 lg:mr-0 mt-6 sm:mt-1 sm:w-1/2 text-justify h-auto">
          <div>
            <h4 className="text-lg uppercase tracking-wide">
              {section?.subTitle1}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle1Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
          <div>
            <h4 className="text-lg mt-10 uppercase tracking-wide">
              {section?.subTitle2}
            </h4>
            <p className="text-sm mt-6 leading-relaxed">
              {section?.subTitle2Text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
