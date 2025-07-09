"use client";
import React from "react";
import content from "@content/home.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useCursorColor } from "@/app/context/CursorContext";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();
  const [currentUrl, setCurrentUrl] = useState("");
  const { fgColorMain } = useCursorColor();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(activeSegment);
    }
  }, [activeSegment, fgColorMain]); // Update the URL on route change
  const [activePage, setActivePage] = useState("");
  const [isSliderOpen, setIsSliderOpen] = useState(false); // State to manage slider visibility
  const { logo, menu } = content.nav;
  const { button_icon } = content.globals;
  const navItems = [
    {
      title: "our work",
      page: "/our-work",
      alt1: "our-work",
      alt2: "case-study",
    },
    {
      title: "services",
      page: "/services",
      alt1: "services",
    },
    {
      title: "about us",
      page: "/about-us",
      alt1: "about-us",
    },
  ];
  const sliderItems = [
    {
      title: "Home",
      page: "/",
      alt1: "/",
    },
    {
      title: "Our Work",
      page: "/our-work",
      alt1: "our-work",
      alt2: "case-study",
    },
    {
      title: "Services",
      page: "/services",
      alt1: "services",
    },
    {
      title: "About Us",
      page: "/about-us",
      alt1: "about-us",
    },
    {
      title: "Contact Us",
      page: "/contact-us",
      alt1: "contact-us",
    },
  ];
  return (
    <nav className="absolute z-[9999] sm:relative w-full top-10 sm:top-20 grid grid-cols-2 justify-end text-nowrap 2xl:justify-between items-center px-10 lg:px-28 xl:px-44 2xl:px-44">
      <Link
        className="cursor-none"
        href="/"
        onClick={() => setCurrentUrl("home")}
      >
        <img className="w-16 sm:w-28" src={logo} />
      </Link>
      <ul className="list-none hidden lg:flex justify-end items-center">
        {navItems.map((item, i) => (
          <li
            key={i}
            style={{
              color:
                currentUrl === item.alt1 || currentUrl === item.alt2
                  ? "#DBF900"
                  : fgColorMain,
            }}
            className="text-base mr-10 relative"
            onClick={() => setActivePage(item?.title)}
          >
            <a className="uppercase nav-item cursor-none" href={item?.page}>
              {item?.title}
            </a>
          </li>
        ))}
        <li className="group">
          <Link
            className="r-transition flex items-center bg-tcs-banana rounded-full w-28 group-hover:w-36 py-2 px-6 text-[15px] text-tcs-pure-black cursor-none"
            href="/contact-us"
            onClick={() => setCurrentUrl("contact")}
          >
            <p className="font-helvetica-neue-medium bg-tcs-banana font-bold">
              Connect
            </p>
            <div className="flex relative bg-tcs-banana items-center mx-1 overflow-hidden">
              <p className="r-transition-s bg-tcs-banana ml-0 text-lg pr-1.5 block">
                |
              </p>
              <img
                src={button_icon}
                className="w-4 bg-tcs-banana mt-0.5 relative group-hover:animate-plateLeft"
              />
            </div>
          </Link>
        </li>
      </ul>
      <img
        className="lg:hidden justify-self-end size-5 sm:size-9 "
        src={menu}
        onClick={() => setIsSliderOpen(true)} // Open the slider on click
      />

      {/* Slider */}
      <div
        className={`sm:hidden fixed inset-0 bg-tcs-black text-tcs-banana z-[999] flex flex-col items-center justify-center transform transition-transform duration-300 ${
          isSliderOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-10 right-10 text-3xl cursor-none"
          onClick={() => setIsSliderOpen(false)} // Close the slider
        >
          &times;
        </button>
        <ul className="text-center space-y-8 text-4xl ">
          {sliderItems.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setActivePage(item?.title);
                setIsSliderOpen(false);
              }}
            >
              <a className=" cursor-none" href={item?.page}>
                {item?.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
