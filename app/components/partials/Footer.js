"use client";
import React from "react";
import content from "@content/home.json";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Footer = ({ data }) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { logo2, button_icon } = content.globals;
  const {
    quickLinks,
    footer_text,
    email,
    insta,
    instaLink,
    linkedin,
    linkedinLink,
    behance,
    behancelink,
  } = content.footer;
  return (
    <div ref={sectionRef}>
      <div
        className={`m-10 mx-2 lg:mx-20 3xl:mx-12 h-[620px] sm:h-auto  w-auto 3xl:w-[95%]  bg-tcs-banana rounded-[30px] p-5 md:p-14 md:pb-16 grid grid-cols-1 lg:grid-cols-4 justify-start`}
      >
        <div className="bg-tcs-banana col-span-2 lg:col-span-1 mx-auto lg:mx-9">
          <img
            className="max-w-36 lg:max-w-28 bg-tcs-banana  mt-7 lg:mt-8 "
            src={logo2}
          />
          <div className="hidden lg:flex  mt-[69px] bg-tcs-banana  justify-center lg:justify-start w-[80%]">
            <Link
              href={instaLink}
              target="_blank"
              className="size-6 hover:size-7 hover:-translate-y-1 r-transition mr-2 bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={insta} />
            </Link>
            <Link
              href={linkedinLink}
              target="_blank"
              className="size-6 hover:size-7 hover:-translate-y-1 r-transition mr-2 bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={linkedin} />
            </Link>
            <Link
              href={behancelink}
              target="_blank"
              className="size-6 hover:size-7 hover:-translate-y-1 r-transition bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={behance} />
            </Link>
          </div>
        </div>
        <div className="mx-0 text-center lg:text-left mt-10 lg:mt-0 bg-tcs-banana">
          <h3 className="hidden bg-tcs-banana lg:block text-tcs-pure-black text-[17px] tracking-wide font-bold mt-6 mb-5 lg:mb-8">
            Quick Links
          </h3>
          <ul className="bg-tcs-banana">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="text-tcs-pure-black bg-tcs-banana text-xl lg:text-base  mb-5 lg:mb-1"
              >
                <Link
                  className="r-transition bg-tcs-banana cursor-none border-tcs-pure-black hover:border-b-2 hover:pb-[2px]"
                  href={link?.link}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex lg:hidden bg-tcs-banana mt-12 justify-center gap-10 ">
            <Link
              href={instaLink}
              target="_blank"
              className="size-10 mr-3 hover:size-11 hover:-translate-y-1 r-transition bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={insta} />
            </Link>
            <Link
              href={linkedinLink}
              target="_blank"
              className="size-10 hover:size-11 hover:-translate-y-1 r-transition bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={linkedin} />
            </Link>
            <Link
              href={behancelink}
              target="_blank"
              className="size-10 hover:size-11 hover:-translate-y-1 r-transition bg-tcs-banana cursor-none"
            >
              <img className="bg-tcs-banana cursor-none" src={behance} />
            </Link>
          </div>
        </div>
        <div className=" col-span-2 mt-10 bg-tcs-banana lg:mt-5 text-center lg:text-left mx-7 lg:mx-0 text-tcs-pure-black text-[27px] lg:text-[19px]  xl:text-2xl">
          <h2 className="text-2xl  bg-tcs-banana font-helvetica-neue-regular">
            {data?.footerText}
          </h2>
          <h3 className=" lg:mb-12 bg-tcs-banana xl:mb-8 font-semibold tracking-tight">
            Let&apos;s connect!
          </h3>
          {/* <p className="bg-tcs-banana text-xl mb-7 lg:hidden">
            <span className="border-b-2 border-black">
              {data?.emailAddress}
            </span>
          </p> */}
          <Link
            className="r-transition mt-4 lg:mt-0 flex justify-center group lg:justify-start items-center border mx-auto lg:mx-0 border-tcs-pure-black  bg-tcs-banana rounded-full h-14 lg:h-10 w-full lg:w-28 lg:hover:w-36 py-1 lg:px-6 text-2xl lg:text-[15px] text-tcs-black lg:text-tcs-pure-black cursor-none"
            href="contact-us"
          >
            <p className="bg-tcs-banana block font-semibold">Connect</p>
            <div className="group-hover:flex bg-tcs-banana relative items-center mx-1 overflow-hidden hidden">
              <p className="r-transition hidden r-transition-s bg-tcs-banana ml-1 sm:ml-0 text-lg pr-1.5 group-hover:block">
                |
              </p>
              <img
                src={button_icon}
                className="w-4 mt-0.5 relative group-hover:animate-plateLeft bg-tcs-banana"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
