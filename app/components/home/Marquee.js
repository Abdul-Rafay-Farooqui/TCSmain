"use client";
import React from "react";
import { useState, useEffect } from "react";
import useDeviceSize from "@/app/hooks/useDevice";
import { InView, useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Marquee = ({ data }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 0.5,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
        },
      },
    ],
  };
  return (
    <div
      ref={sectionRef}
      className={` pt-8 py-0 my-2 lg:my-4 slider-container`}
    >
      <Slider {...settings}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item, i) => {
            const title = item.fields.title; // Access title
            const icon = item?.fields?.icon?.fields?.file?.url;

            return (
              <div key={i}>
                <div className="flex justify-around items-center mb-8 sm:mb-0">
                  <h3 className="text-tcs-white text-lg sm:text-xl md:text-3xl xl:text-6xl uppercase font-normal">
                    {title}
                  </h3>
                  <div className="h-8 w-10 sm:h-14 sm:w-[73px] lg:h-24 lg:w-[127px]">
                    <img
                      className="max-w-10 sm:max-w-[73px] lg:max-w-32 size-full object-contain"
                      src={icon}
                      alt="Missing"
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-tcs-white">
            <p>No marquee items available.</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Marquee;
