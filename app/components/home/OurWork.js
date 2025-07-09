"use client";
import React from "react";
import content from "@content/home.json";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const OurWork = ({ data }) => {
  console.log(data);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: btmImageRef, inView: btmImgInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const {
    foward_icon_white,
    button_icon,
    downwards_right_arrow_black,
    downwards_right_arrow_banana,
  } = content.globals;
  const {
    image1,
    image1url,
    image2,
    image2url,
    image3,
    image3url,
    image4,
    imageurl,
  } = content.ourwork;
  return (
    <div ref={sectionRef} className="mt-[67px] mb-6">
      <div className="border-b-tcs-light-gray border-b-2 flex justify-between items-center mb-14 ">
        <h2 className="text-[34px] md:text-[55px] text-tcs-pure-white md:mb-6 uppercase">
          {data?.sectionTitle}
        </h2>
        <Link
          className="r-transition group mx-0 mt-3 md:mt-3 flex items-end sm:items-center justify-center border border-tcs-banana bg-tcs-pure-black hover:bg-tcs-banana hover:text-tcs-pure-black rounded-full h-7 sm:h-14 lg:h-10 w-28 md:w-32 hover:w-32 lg:hover:w-40  lg:py-2 lg:px-2 text-base lg:text-[15px] text-tcs-white group mb-3 md:mb-8 cursor-none"
          href="/our-work"
        >
          <p className="text-center ml-1.5 lg:ml-5 lg:mr-2">View All</p>
          <div className="flex relative items-center overflow-hidden">
            <p className="ml-1.5 lg:ml-0 text-lg pr-1.5 group-hover:block hidden">
              |
            </p>
            <img
              src={button_icon}
              className="relative group-hover:animate-plateLeft w-4 mt-0.5"
            />
          </div>
        </Link>
      </div>
      <div>
        <div
          className={` our-work-images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 place-content-between 3xl:pb-3 3xl:pt-5`}
        >
          <div
            className={` ${
              sectionInView ? "scale-[100%]" : "scale-[90%]"
            } r-transition 3xl:place-self-start group bg-tcs-black hover:bg-tcs-banana md:max-w-[435px] 3xl:max-w-[575px] max-h-[500px] 3xl:max-h-[670px] rounded-[46px] 3xl:rounded-[60px] p-4 3xl:p-5   relative`}
          >
            <a
              className="cursor-none"
              href={`/case-study/${data?.firstImageSlug}`}
            >
              {/* Image */}
              <div className="relative h-full 3xl:h-[630px] group">
                {/* Image */}
                <img
                  className="size-full rounded-[30px] 3xl:rounded-[40px] object-cover z-10"
                  src={data?.firstImage?.fields?.file?.url}
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-transparent to-transparent opacity-0 group-hover:opacity-70 rounded-[30px] 3xl:rounded-[40px] z-0"></div>
              </div>

              {/* Text */}
              <div className="items-end r-transition hidden group-hover:flex absolute -translate-y-28 lg:-translate-y-32 translate-x-3 sm:translate-x-4 text-tcs-pure-white text-[30px] sm:text-xl lg:text-xl xl:text-2xl font-semibold max-w-64 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 h-28 line-clamp-2 overflow-hidden ">
                <p className="truncate-2-lines max-w-56 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 max-h-28 sm:max-h-[70px] z-50">
                  {data?.firstImageOnHoverText}
                </p>
              </div>

              {/* Button */}
              <div className="r-transition card-b-l-btn group-hover:bg-tcs-banana flex justify-end items-end z-30">
                <div className="absolute size-20 -translate-y-[50px] scoop-top group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="absolute size-20 -translate-x-[50px] scoop-bottom group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="curveTop bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="curveBottom bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="r-transition size-20 3xl:size-28 bg-tcs-banana group-hover:bg-tcs-black rounded-[25px] 3xl:rounded-[39px] p-7 3xl:p-10 float-end z-30">
                  <img
                    src={downwards_right_arrow_black}
                    className="group-hover:hidden"
                  />
                  <img
                    src={downwards_right_arrow_banana}
                    className="hidden group-hover:block"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            className={`${
              sectionInView ? "scale-[100%]" : "scale-[90%]"
            } r-transition 3xl:place-self-center group bg-tcs-black hover:bg-tcs-banana md:max-w-[435px] 3xl:max-w-[580px] max-h-[500px] 3xl:max-h-[670px] rounded-[46px] 3xl:rounded-[60px] p-4 3xl:p-5  relative`}
          >
            <a
              className="cursor-none"
              href={`/case-study/${data?.secondImageSlug}`}
            >
              {/* Image */}
              <div className="relative h-full 3xl:h-[630px] group">
                {/* Image */}
                <img
                  className="size-full rounded-[30px] 3xl:rounded-[40px] object-cover z-10"
                  src={data?.secondImage?.fields?.file?.url}
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-transparent to-transparent opacity-0 group-hover:opacity-70 rounded-[30px] 3xl:rounded-[40px] z-0"></div>
              </div>

              {/* Text */}
              {/* Text */}
              <div className="items-end r-transition hidden group-hover:flex absolute -translate-y-28 lg:-translate-y-32 translate-x-3 sm:translate-x-4 text-tcs-pure-white text-[30px] sm:text-xl lg:text-xl xl:text-2xl font-semibold max-w-64 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 h-28 line-clamp-2 overflow-hidden ">
                <p className="truncate-2-lines max-w-56 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 max-h-28 sm:max-h-[70px] z-50">
                  {data?.secondImageOnHoverText}
                </p>
              </div>
              {/* Button */}
              <div className="r-transition card-b-l-btn group-hover:bg-tcs-banana flex justify-end items-end z-30">
                <div className="absolute size-20 -translate-y-[50px] scoop-top group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="absolute size-20 -translate-x-[50px] scoop-bottom group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="curveTop bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="curveBottom bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="r-transition size-20 3xl:size-28 bg-tcs-banana group-hover:bg-tcs-black rounded-[25px] 3xl:rounded-[39px] p-7 3xl:p-10 float-end z-30">
                  <img
                    src={downwards_right_arrow_black}
                    className="group-hover:hidden"
                  />
                  <img
                    src={downwards_right_arrow_banana}
                    className="hidden group-hover:block"
                  />
                </div>
              </div>
            </a>
          </div>
          <div
            className={`${
              sectionInView ? "scale-[100%]" : "scale-[90%]"
            } r-transition 3xl:place-self-end group bg-tcs-black hover:bg-tcs-banana md:max-w-[435px] 3xl:max-w-[580px] max-h-[500px] 3xl:max-h-[670px] rounded-[46px] 3xl:rounded-[60px] p-4 3xl:p-5  relative`}
          >
            <a
              className="cursor-none"
              href={`/case-study/${data?.thirdImageSlug}`}
            >
              <div className="relative h-full 3xl:h-[630px] group">
                {/* Image */}
                <img
                  className="size-full rounded-[30px] 3xl:rounded-[40px] object-cover z-10"
                  src={data?.thirdImage?.fields?.file?.url}
                />

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-transparent to-transparent opacity-0 group-hover:opacity-70 rounded-[30px] 3xl:rounded-[40px] z-0"></div>
              </div>

              {/* Text */}
              {/* Text */}
              <div className="items-end r-transition hidden group-hover:flex absolute -translate-y-28 lg:-translate-y-32 translate-x-3 sm:translate-x-4 text-tcs-pure-white text-[30px] sm:text-xl lg:text-xl xl:text-2xl font-semibold max-w-64 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 h-28 line-clamp-2 overflow-hidden ">
                <p className="truncate-2-lines max-w-56 sm:max-w-[150px] lg:max-w-40 xl:max-w-52 3xl:max-w-52 max-h-28 sm:max-h-[70px] z-50">
                  {data?.thirdImageOnHoverText}
                </p>
              </div>

              {/* Button */}
              <div className="r-transition card-b-l-btn group-hover:bg-tcs-banana flex justify-end items-end z-30">
                <div className="absolute size-20 -translate-y-[50px] scoop-top group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="absolute size-20 -translate-x-[50px] scoop-bottom group-hover:bg-curve-top-banana sm:hidden"></div>
                <div className="curveTop bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="curveBottom bg-tcs-black r-transition group-hover:bg-tcs-banana hidden sm:block"></div>
                <div className="r-transition size-20 3xl:size-28 bg-tcs-banana group-hover:bg-tcs-black rounded-[25px] 3xl:rounded-[39px] p-7 3xl:p-10 float-end z-30">
                  <img
                    src={downwards_right_arrow_black}
                    className="group-hover:hidden"
                  />
                  <img
                    src={downwards_right_arrow_banana}
                    className="hidden group-hover:block"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div ref={btmImageRef}>
          <a
            className={`${
              btmImgInView ? "scale-[100%]" : "scale-[90%]"
            } hidden lg:block r-transition group bg-tcs-black hover:bg-tcs-banana md:max-h-[500px] 3xl:max-h-[750px] rounded-[46px] 3xl:rounded-[60px] p-4 3xl:p-5  mt-8  relative cursor-none`}
            href={`/case-study/${data?.fourthImageSlug}`}
          >
            <div className="relative group">
              {/* Image */}
              <img
                className="w-full h-[400px] 3xl:h-[627px] rounded-[30px] 3xl:rounded-[40px] object-cover z-10"
                src={data?.fourthImageLandscape?.fields?.file?.url}
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black from-20% via-transparent to-transparent opacity-0 group-hover:opacity-70 rounded-[30px] 3xl:rounded-[40px] z-20"></div>
            </div>

            {/* Text */}
            <div className="z-30 r-transition hidden group-hover:block absolute -translate-y-14 translate-x-6 2xl:translate-x-6 text-tcs-pure-white text-2xl lg:text-lg xl:text-3xl px-5 sm:px-2 2xl:px-0 max-w-56 lg:max-w-[90%]">
              <p> {data?.fourthImageOnHoverText} </p>
            </div>

            {/* Button */}
            <div className="r-transition card-b-l-btn group-hover:bg-tcs-banana flex justify-end items-end z-30">
              <div className="curveTop bg-tcs-black r-transition group-hover:bg-tcs-banana"></div>
              <div className="curveBottom bg-tcs-black r-transition group-hover:bg-tcs-banana"></div>
              <div className="r-transition size-20 3xl:size-28 bg-tcs-banana group-hover:bg-tcs-black rounded-[25px] 3xl:rounded-[40px] p-7 3xl:p-9 float-end z-30">
                <img
                  src={downwards_right_arrow_black}
                  className="group-hover:hidden"
                />
                <img
                  src={downwards_right_arrow_banana}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
