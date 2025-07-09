"use client";
import React from "react";
import content from "@content/our-work.json";
import { useInView } from "react-intersection-observer";
const Card = ({ caseStudy }) => {
  const { globals } = content;
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <a
      ref={cardRef}
      href={`/case-study/${caseStudy?.fields?.slug}`}
      className={` ${
        cardInView ? "scale-[100%]" : "scale-[90%]"
      } r-transition cursor-none`}
    >
      <div className="r-transition group bg-tcs-black hover:bg-tcs-banana lg:max-w-[435px] 3xl:max-w-[575px] h-[200px] lg:h-[500px] 3xl:h-[670px] max-h-[500px] 3xl:max-h-[670px] overflow-hidden rounded-[20px] lg:rounded-[46px] p-[8px] lg:p-4 ">
        <div className="relative h-full 3xl:h-[635px] group">
          {/* Image */}
          <img
            className="size-full rounded-[16px] lg:rounded-[30px] object-cover z-10"
            src={caseStudy?.fields?.thumbnail?.fields?.file?.url}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-transparent to-transparent opacity-0 group-hover:opacity-70 rounded-[16px] lg:rounded-[30px] z-0"></div>
        </div>
        <div className="items-end r-transition hidden group-hover:flex absolute -translate-y-11 sm:-translate-y-20 lg:-translate-y-20 translate-x-3 sm:translate-x-4 text-tcs-pure-white text-[9px] sm:text-xl lg:text-xl xl:text-2xl font-semibold max-w-[85px] sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 h-[40px] sm:h-[70px] line-clamp-2 overflow-hidden ">
          <p className="truncate-2-lines max-w-[85px] sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 max-h-[29px] sm:max-h-[70px]">
            {caseStudy?.fields?.title}
          </p>
        </div>
        <div className="r-transition relative bottom-[45px] lg:bottom-[100px] float-right size-[48px] lg:size-[100px] bg-tcs-black rounded-tl-[50%] group-hover:bg-tcs-banana flex justify-end items-end ">
          <div className="absolute size-20 -translate-y-[45px] scoop-ow-top group-hover:bg-curve-top-banana-xs sm:hidden"></div>
          <div className="absolute size-20 -translate-x-[45px] scoop-ow-bottom group-hover:bg-curve-top-banana-xs sm:hidden"></div>
          <div className="curveTopOurWork bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
          <div className="curveBottomOurWork bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
          <div className="r-transition size-10 lg:size-20 bg-tcs-banana group-hover:bg-tcs-black rounded-[14px] lg:rounded-[25px] p-3 lg:p-7 z-10">
            <div>
              <img
                src={globals.downwards_right_arrow_black}
                className="group-hover:hidden"
              />
            </div>
            <img
              src={globals.downwards_right_arrow_banana}
              className="hidden group-hover:block"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
