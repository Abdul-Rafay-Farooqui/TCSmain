"use client";
import React, { useEffect, useState } from "react";
import WhoWeAre from "../components/about-us/WhoWeAre";
import TheTribe from "../components/about-us/TheTribe";
import Header from "../components/our-work/Header";
import { getAboutUsPageData } from "@/lib/about-us";

const AboutUs = () => {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAboutUsPageData();
        setData(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center my-20">
          <div className="animate-spin rounded-full border-4 border-t-4 border-tcs-black border-t-tcs-banana w-16 h-16"></div>
        </div>
      ) : (
        <div className="px-2 xl:px-20 3xl:px-[52px]">
          <WhoWeAre data={data?.main} />
          <TheTribe data={data?.tribe} />
        </div>
      )}
    </>
  );
};

export default AboutUs;
