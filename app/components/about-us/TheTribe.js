"use client";
import React, { useEffect, useState } from "react";
import content from "@content/about-us.json";
import { useInView } from "react-intersection-observer";
const TheTribe = ({ data }) => {
  const [owners, setOwners] = useState([]);
  const [team, setTeam] = useState([]);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    const firstThree = data?.slice(0, 3);
    const rest = data?.slice(3);

    setOwners(firstThree);
    setTeam(rest);
  }, []);
  const { monkey, tribe } = content;
  return (
    <div ref={sectionRef} className="mt-20 sm:mt-32">
      <div className="flex justify-center pt-2">
        <div className="relative">
          <div
            className={` ${
              sectionInView
                ? "  animate__animated animate__zoomIn animate__faster"
                : "opacity-0"
            } absolute translate-x-1 -z-10 w-[210px] sm:w-64 h-12 sm:h-[61px] rounded-2xl bg-tcs-banana rotate-[-3deg]`}
          ></div>
        </div>
        <p className="text-tcs-pure-black relative h-16 font-extrabold text-5xl sm:text-6xl translate-x-1 z-10">
          <span
            className={`${sectionInView ? " animate-plateUp" : "opacity-0"}`}
          >
            The Tribe
          </span>
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <img className="size-16 sm:size-[66px] spin" src={monkey} />
      </div>
      <div className="lg:grid grid-cols-2 lg:grid-cols-3 px-2 sm:px-16 mt-12 sm:mt-[120px] hidden ">
        {owners.map((member, i) => (
          <div ref={cardRef} key={i}>
            <div
              className={` ${
                cardInView ? "scale-100" : "scale-90"
              } r-transition text-center mb-12 sm:mb-16`}
            >
              <img
                className="size-40 sm:size-40 m-9 mx-auto"
                src={member?.tribeImage?.fields?.file?.url}
              />
              <p className="text-tcs-white text-xl sm:text-4xl tracking-wide font-bold mb-2">
                {member?.tribeName}
              </p>
              <p className="text-tcs-banana text-base sm:text-2xl font-normal">
                {member?.tribeDesignation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 px-2 sm:px-16 mb-12 sm:mb-[120px]">
        {team?.map((member, i) => (
          <div ref={cardRef} key={i}>
            <div
              className={` ${
                cardInView ? "scale-100" : "scale-90"
              } r-transition text-center mb-12 sm:mb-16`}
            >
              <img
                className="size-20 sm:size-32 m-9 mx-auto"
                src={member?.tribeImage?.fields?.file?.url}
              />
              <p className="text-tcs-white text-xl sm:text-4xl tracking-wide font-bold mb-2">
                {member?.tribeName}
              </p>
              <p className="text-tcs-banana text-base sm:text-2xl font-normal">
                {member?.tribeDesignation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:hidden mt-12 px-2 sm:px-16 mb-12 sm:mb-[120px]">
        {data?.map((member, i) => (
          <div ref={cardRef} key={i}>
            <div
              className={` ${
                cardInView ? "scale-100" : "scale-90"
              } r-transition text-center mb-12 sm:mb-16`}
            >
              <img
                className="size-20 sm:size-32 m-9 mx-auto"
                src={member?.tribeImage?.fields?.file?.url}
              />
              <p className="text-tcs-white text-xl sm:text-4xl tracking-wide font-bold mb-2">
                {member?.tribeName}
              </p>
              <p className="text-tcs-banana text-base sm:text-2xl font-normal">
                {member?.tribeDesignation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTribe;
