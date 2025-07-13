"use client";
import React, { useEffect, useRef } from "react";
import content from "@content/home.json";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useCursorColor } from "@/app/context/CursorContext";

const Services = ({ data }) => {
  const { setCursorColor } = useCursorColor();
  const videoRefs = useRef([]);

  useEffect(() => {
    setCursorColor("border-tcs-white"); // Change this to the desired color class

    return () => {
      setCursorColor("border-tcs-banana"); // Reset to default on unmount
    };
  }, [setCursorColor]);

  useEffect(() => {
    // Force autoplay for Safari
    const videos = videoRefs.current;
    videos.forEach((video) => {
      if (video) {
        // Set muted and playsInline for Safari
        video.muted = true;
        video.playsInline = true;

        // Try to play the video
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Autoplay started successfully
              console.log('Video autoplay started');
            })
            .catch((error) => {
              // Autoplay was prevented, try again on user interaction
              console.log('Autoplay prevented:', error);

              const handleUserInteraction = () => {
                video.play().catch(console.error);
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('click', handleUserInteraction);
              };

              document.addEventListener('touchstart', handleUserInteraction);
              document.addEventListener('click', handleUserInteraction);
            });
        }
      }
    });
  }, []);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { title, services, b_image } = content.service;
  const { button_icon, foward_icon_white, forward_icon_banana } =
    content.globals;
  return (
    <div className={`r-transition bg-tcs-black rounded-[35px]`}>
      <div
        ref={sectionRef}
        className="grid xl:grid-cols-2 xl:justify-between lg:rounded-bl-3xl xl:border-b-2 xl:mr-8 xl:border-b-tcs-banana"
      >
        {/* Service Section Title */}
        <div
          className={`py-6 lg:py-16 px-4 lg:px-16 xl:px-7 2xl-px-16 bg-tcs-banana rounded-t-3xl lg:rounded-3xl lg:rounded-tr-none`}
        >
          <h3 className="text-tcs-pure-black bg-tcs-banana max-h-[120px] overflow-hidden text-left text-3xl lg:text-[40px] uppercase w-full sm:w-[90%] md:w-[70%] lg:w-full tracking-wide leading-tight">
            <span
              className={` ${sectionInView ? "animate-plateUp" : "top-96"
                } relative bg-tcs-banana`}
            >
              {data?.sectionTitleText}
            </span>
          </h3>
          <Link
            className="r-transition group mx-0 mt-3 flex items-center justify-center border border-tcs-pure-black bg-tcs-banana hover:bg-tcs-pure-black hover:text-tcs-banana rounded-full h-14 lg:h-10 w-full lg:w-28 lg:hover:w-36 lg:py-2 lg:px-2 text-xl lg:text-[15px] text-tcs-pure-black group cursor-none"
            href="/services"
          >
            <p className="text-center font-bold ml-5">Explore</p>
            <div className="flex relative items-center mx-2 overflow-hidden">
              <p className="r-transition  hover:-scale-x-100 ml-0 text-lg pr-1.5 group-hover:block hidden">
                |
              </p>
              <img
                src={forward_icon_banana}
                className="relative group-hover:animate-plateLeft w-4 mt-0.5"
              />
            </div>
          </Link>
        </div>
        {/* First Service */}
        <div
          className={`mx-2 mt-9 lg:flex lg:justify-end lg:items-end pb-2 border-b-2 xl:border-b-0 border-b-tcs-banana`}
        >
          <div className={` flex lg:mb-12`}>
            <img
              className="r-transition hover:-scale-x-100 size-[10px] lg:size-5 mr-3 mt-2 lg:mt-0 "
              src={foward_icon_white}
            />
            <Link className="cursor-none" href="/services">
              <h3 className="r-transition mb-4 lg:mt-2 lg:mb-0 text-tcs-banana  hover:text-transparent hover:text-stroke text-4xl lg:text-[90px] uppercase">
                {services[0].title}
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:block relative ">
        <video
          ref={(el) => (videoRefs.current[0] = el)}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          loading="lazy"
          className="r-transition absolute hover:scale-110 size-[500px] right-10 rotate-6"
        >
          <source src="/image/Swiggle.mov" type="video/quicktime" />
          <source src="/image/Swiggle.webm" type="video/webm" />
        </video>
      </div>
      <>
        {/* Second Service */}
        <div className="lg:flex justify-start items-center lg:items-start py-3 group lg:py-7 border-b-2 mx-2 lg:mx-8 border-b-tcs-banana">
          <div className={`flex my-3`}>
            <Link className="cursor-none" href="/services">
              <h3 className="hidden lg:block r-transition text-tcs-banana max-w-[650px]  hover:text-transparent hover:text-stroke text-2xl sm:text-4xl md:text-6xl lg:text-[90px] uppercase">
                {services[1].title} {services[1].title2}
              </h3>
            </Link>
            <img
              className="r-transition  hover:-scale-x-100 size-[10px] lg:size-5 mt-3 mr-3"
              src={foward_icon_white}
            />
            <div className="sm:flex block lg:hidden sm:gap-2">
              <Link className="cursor-none" href="/services">
                <h3 className="r-transition sm:pt-3 sm:mb-2 lg:mb-0  text-tcs-banana   group-hover:text-transparent group-hover:text-stroke text-4xl lg:text-[90px] uppercase">
                  {services[1].title}
                </h3>
                <h3 className=" r-transition sm:pt-3 mb-2 lg:mb-0  text-tcs-banana  group-hover:text-transparent group-hover:text-stroke text-4xl lg:text-[90px] uppercase">
                  {services[1].title2}
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden xl:block relative ">
          <video
            ref={(el) => (videoRefs.current[1] = el)}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            loading="lazy"
            className="r-transition absolute hover:scale-110 size-56 left-36"
          >
            <source src="/image/Star2.mov" type="video/quicktime" />
            <source src="/image/Star2.webm" type="video/webm" />
          </video>
        </div>
        {/* Third Service */}
        <div className="lg:justify-center lg:items-center py-3 lg:py-5 xl:pl-32 border-b-2 mx-2 lg:mx-8 group border-b-tcs-banana ">
          <div>
            <div className="flex group lg:justify-center lg:items-center lg:h-28 lg:mb-8">
              <img
                className=" r-transition  hover:-scale-x-100 lg:hidden size-[10px] lg:size-5 mr-3 lg:mr-10 mt-5 lg:mt-7"
                src={foward_icon_white}
              />
              <div className="sm:flex block sm:gap-2">
                <Link className="cursor-none" href="/services">
                  <h3 className="r-transition pt-3 sm:mb-2 lg:mb-0  text-tcs-banana   group-hover:text-transparent group-hover:text-stroke text-4xl lg:text-[90px] uppercase">
                    {services[2].title}
                  </h3>
                  <h3 className="lg:hidden r-transition sm:pt-3 mb-2 lg:mb-0  text-tcs-banana  group-hover:text-transparent group-hover:text-stroke text-4xl lg:text-[90px] uppercase">
                    {services[2].title2}
                  </h3>
                </Link>
              </div>
              <img
                className="r-transition  hover:-scale-x-100 hidden lg:block  size-[10px] lg:size-5 mr-3 lg:mr-0  mt-3 lg:mt-0 ml-3 lg:mb-8"
                src={foward_icon_white}
              />
            </div>
            <Link className="cursor-none" href="/services">
              <h3 className=" hidden lg:block r-transition xl:ml-36 mb-10  xl:text-center text-tcs-banana   group-hover:text-transparent group-hover:text-stroke text-4xl lg:text-[90px] uppercase">
                {services[2].title2}
              </h3>
            </Link>
          </div>
        </div>
        <div className="hidden xl:block relative ">
          <video
            ref={(el) => (videoRefs.current[2] = el)}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            loading="lazy"
            className="r-transition absolute hover:scale-110 size-[260px] -top-5 right-0"
          >
            <source src="/image/Circle.mov" type="video/quicktime" />
            <source src="/image/Circle.webm" type="video/webm" />
          </video>
        </div>
        {/* Fourth Service */}
        <div className="lg:flex justify-start items-start py-3 lg:py-9 border-b-2 mx-2 lg:mx-8 border-b-tcs-banana">
          <div className={`flex lg:px-1 w-80 lg:w-full`}>
            <Link className="cursor-none" href="/services">
              <h3 className="hidden lg:block r-transition text-tcs-banana  hover:text-transparent hover:text-stroke text-2xl sm:text-4xl md:text-6xl lg:text-[90px] uppercase">
                {services[3].title}
              </h3>
            </Link>
            <img
              className="r-transition  hover:-scale-x-100 size-[10px] lg:size-5 lg:ml-5 mr-3 lg:mr-0 mt-3 lg:mt-3"
              src={foward_icon_white}
            />
            <Link className="cursor-none" href="/services">
              <h3 className="lg:hidden mb-2 r-transition text-tcs-banana  hover:text-transparent hover:text-stroke text-4xl lg:text-[90px] uppercase">
                {services[3].title}
              </h3>
            </Link>
          </div>
        </div>
        {/* Fifth Service */}
        <div className="lg:flex justify-start items-start py-3 lg:py-9 lg:border-b-2 mx-2 lg:mx-8 border-b-tcs-banana">
          <div className={` flex lg:px-1 w-80 lg:w-full`}>
            <Link className="cursor-none" href="/services">
              <h3 className="hidden lg:block r-transition text-tcs-banana  hover:text-transparent hover:text-stroke text-2xl sm:text-4xl md:text-6xl lg:text-[90px] uppercase">
                {services[4].title}
              </h3>
            </Link>
            <img
              className="r-transition  hover:-scale-x-100 size-[10px] lg:size-5 lg:ml-5 mr-3 lg:mr-0 mt-3 lg:mt-3"
              src={foward_icon_white}
            />
            <Link className="cursor-none" href="/services">
              <h3 className="lg:hidden mb-2 r-transition text-tcs-banana  hover:text-transparent hover:text-stroke text-4xl lg:text-[90px] uppercase">
                {services[4].title}
              </h3>
            </Link>
          </div>
        </div>
        <img
          className={`p-2 lg:p-7 h-32 lg:h-56  w-full rounded-[35px]`}
          src={b_image}
        />
      </>
    </div>
  );
};

export default Services;
