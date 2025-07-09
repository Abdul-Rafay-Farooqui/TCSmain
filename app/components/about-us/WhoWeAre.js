"use client";
import React from "react";
import content from "@content/about-us.json";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const WhoWeAre = ({ data }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { aboutUsImage, aboutUsTitle, aboutUsParagraph1, aboutUsParagraph2 } =
    data;
  const { button_icon } = content.globals;
  const { pageImage, heading, paragraph1, paragraph2 } = content;
  return (
    <div className="mt-24 sm:mt-36 lg:mt-32">
      <div className="lg:h-[387px] hidden md:flex">
        <DotLottieReact src="/TCS.json" loop autoplay />
      </div>
      <div className="bg-tcs-black text-tcs-white border border-tcs-dark-gray rounded-[25px] md:rounded-[30px] p-2 md:p-6 lg:flex items-center mb-8">
        <div
          ref={sectionRef}
          className="lg:max-w-[580px] 3xl:max-w-[800px] lg:min-w-[300px] 3xl:min-w-[700px] rounded-lg mb-3 lg:mb-0"
        >
          <img
            src={aboutUsImage.fields.file.url}
            className={` ${
              sectionInView ? "animate__animated animate__fadeIn" : "opacity-0"
            } rounded-[18px] md:rounded-lg w-full object-cover`}
          />
        </div>
        <div
          className={`${
            sectionInView ? "animate-plateLeft" : "opacity-0"
          } relative`}
        >
          <div className="ml-2 lg:ml-16 xl:max-w-[610px] 3xl:max-w-[800px] text-left">
            <h3 className="text-xl xl:text-[40px] font-extrabold tracking-wide mb-4 sm:mb-7 uppercase sm:capitalize">
              {aboutUsTitle}
            </h3>
            <h4 className="text-tcs-light-gray leading-normal text-base xl:text-xl max-w-[545px] 3xl:max-w-[800px] mb-4 sm:mb-8">
              {aboutUsParagraph1}
            </h4>
            <h4 className="text-tcs-light-gray leading-normal text-base xl:text-xl max-w-[545px] 3xl:max-w-[800px] mb-8">
              {aboutUsParagraph2}
            </h4>
            <div className="-translate-x-1">
              <Link
                className="r-transition bg-tcs-banana group text-tcs-black mt-3 mx-auto sm:mx-0 flex justify-center lg:justify-start items-center rounded-full w-[97%] sm:w-52 xl:w-52 xl:hover:w-[245px] h-14 xl:h-[60px] py-2 text-base xl:text-xl cursor-none overflow-hidden px-5 mb-3.5"
                href="contact-us"
              >
                <p className="r-transition bg-tcs-banana font-bold text-xl sm:text-base xl:text-[22px] whitespace-nowrap">
                  Connect with us
                </p>
                <div className="r-transition group-hover:flex relative bg-tcs-banana items-center mx-1 overflow-hidden hidden">
                  <p className="r-transition-s bg-tcs-banana ml-0 text-lg px-1.5 block">
                    |
                  </p>
                  <img
                    src={button_icon}
                    className="r-transition w-4 bg-tcs-banana mt-0.5 relative group-hover:animate-plateLeft"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
