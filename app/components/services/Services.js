"use client";
import React, { useEffect } from "react";
import content from "@content/services.json";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
const Services = ({ service, i }) => {
  const { ref: serviceRef, inView: serviceInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { globals, services } = content;
  const getBackground = (background, i) => {
    const order = i % 2 == 0 ? "" : "flex-row-reverse";
    switch (background) {
      case "black":
        return `bg-tcs-black text-tcs-pure-white ${order}`;
      case "white":
        return `bg-tcs-white text-tcs-pure-black ${order}`;
      case "banana":
        return `bg-tcs-banana text-tcs-pure-black ${order}`;
      default:
        return `bg-tcs-black text-tcs-pure-white ${order}`;
    }
  };

  return (
    <div
      className={`${getBackground(
        service.fields.serviceBackgroundColor,
        i
      )} border border-tcs-dark-gray rounded-[30px] p-2 lg:p-6 3xl:p-4 lg:flex items-center ${
        i % 2 === 0 ? "" : "justify-between"
      } mb-6`}
      ref={serviceRef}
      key={i}
    >
      <div
        className={` ${
          serviceInView ? "animate__animated animate__fadeIn" : "opacity-0"
        } r-transition lg:max-w-[580px] 3xl:max-w-full lg:min-w-[400px] 3xl:min-w-[700px] lg:h-[590px] rounded-xl border-opacity-70`}
      >
        <img
          src={service.fields.serviceImage.fields.file.url}
          className={`rounded-3xl size-full 3xl:w-full object-cover`}
        />
      </div>
      <div
        className={` ${
          serviceInView
            ? i % 2 === 0
              ? "animate-plateLeft "
              : "animate-plateRight"
            : "opacity-0"
        } relative`}
      >
        <div
          className={`${
            i % 2 === 0 ? "lg:ml-10 xl:ml-16" : "lg:ml-12 lg:mr-10 xl:mr-16 "
          }
          ${
            service.fields.serviceBackgroundColor === "banana" &&
            "bg-tcs-banana"
          } 
          mt-4 xl:mt-0 sm:max-w-[610px] 3xl:max-w-[800px] px-3 lg:px-0 `}
        >
          <h3
            className={`${
              service.fields.serviceBackgroundColor === "banana" &&
              "bg-tcs-banana"
            } text-2xl sm:text-3xl xl:text-[40px] font-extrabold  tracking-wide uppercase mb-2 lg:mb-10`}
          >
            {service.fields.serviceTitle}
          </h3>
          <h4
            className={`${
              service.fields.serviceBackgroundColor === "black"
                ? "text-tcs-light-gray text-[14px] lg:text-[19px] mb-3 md:mb-8 font-helvetica-neue-regular leading-7"
                : service.fields.serviceBackgroundColor === "banana"
                ? "text-tcs-black bg-tcs-banana text-[14px] lg:text-[19px] mb-3 md:mb-8 font-helvetica-neue-regular leading-7"
                : "text-tcs-black text-sm lg:text-[19px] mb-3 md:mb-8 leading-7"
            }`}
          >
            {service.fields.serviceDescription}
          </h4>
          <h4
            className={`${
              service.fields.serviceBackgroundColor === "banana" &&
              "bg-tcs-banana"
            } text-lg xl:text-2xl tracking-wide font-extrabold`}
          >
            Simply put
          </h4>
          <div
            className={`${
              service.fields.serviceBackgroundColor === "banana" &&
              "bg-tcs-banana"
            } sm:grid grid-cols-2 gap-5 lg:gap-9 2xl:gap-2 mt-3 mb-10 `}
          >
            <ul className="list-disc ml-5 lg:ml-8">
              {service.fields.simplyPutList1.map((item, j) => (
                <li
                  key={j}
                  className={`${
                    service.fields.serviceBackgroundColor === "black"
                      ? "text-tcs-light-gray text-sm xl:text-xl mb-2 sm:mb-0"
                      : service?.fields?.serviceBackgroundColor === "banana"
                      ? "bg-tcs-banana text-tcs-black text-sm xl:text-xl mb-2 sm:mb-0"
                      : "text-tcs-black text-sm xl:text-xl mb-2 sm:mb-0"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="list-disc ml-5 sm:ml-0 3xl:ml-10">
              {service.fields.simplyPutList2.map((item, j) => (
                <li
                  key={j}
                  className={`${
                    service.fields.serviceBackgroundColor === "black"
                      ? "text-tcs-light-gray text-sm xl:text-xl mb-2 sm:mb-0"
                      : service?.fields?.serviceBackgroundColor === "banana"
                      ? "bg-tcs-banana text-tcs-black text-sm xl:text-xl mb-2 sm:mb-0"
                      : "text-tcs-black text-sm xl:text-xl mb-2 sm:mb-0"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              service?.fields?.serviceBackgroundColor === "banana" &&
              "bg-tcs-banana"
            }`}
          >
            <Link
              className={` ${
                service.fields.serviceBackgroundColor === "banana"
                  ? "bg-tcs-black text-tcs-banana"
                  : "bg-tcs-banana text-tcs-black"
              } r-transition mt-3 group flex justify-center lg:justify-start items-center rounded-full cursor-none overflow-hidden w-full md:w-44 xl:w-40 xl:hover:w-52  h-12 xl:h-[60px] py-2 text-xl px-5 mb-3.5 `}
              href="contact-us"
            >
              <p
                className={` ${
                  service.fields.serviceBackgroundColor === "banana"
                    ? "bg-tcs-black"
                    : "bg-tcs-banana"
                } font-helvetica-neue-medium font-semibold text-2xl md:text-xl xl:text-[22px] whitespace-nowrap`}
              >
                Get Started
              </p>
              <div
                className={` ${
                  service.fields.serviceBackgroundColor === "banana"
                    ? "bg-tcs-black"
                    : "bg-tcs-banana"
                } r-transition group-hover:flex relative items-center mx-1 overflow-hidden hidden`}
              >
                <p
                  className={`${
                    service.fields.serviceBackgroundColor === "banana"
                      ? "bg-tcs-black"
                      : "bg-tcs-banana"
                  } relative z-10 px-1`}
                >
                  |
                </p>
                <img
                  src={
                    service.fields.serviceBackgroundColor === "banana"
                      ? globals.foward_icon_banana
                      : globals.button_icon
                  }
                  className={` ${
                    service.fields.serviceBackgroundColor === "banana"
                      ? "bg-tcs-black"
                      : "bg-tcs-banana"
                  } pl-1 pr-3 h-5 relative group-hover:animate-plateLeft z-0`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
