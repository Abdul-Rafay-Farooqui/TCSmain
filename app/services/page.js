"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/services/Header";
import Services from "../components/services/Services";
import { getServicesPageData } from "@/lib/services";

const Service = () => {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getServicesPageData();
        setData(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-2 lg:px-20 3xl:px-[52px]">
      <Header />
      {loading ? (
        <div className="flex items-center justify-center my-20">
          <div className="animate-spin rounded-full border-4 border-t-4 border-tcs-black border-t-tcs-banana w-16 h-16"></div>
        </div>
      ) : (
        <div className="sm:mt-16 lg:mt-28">
          {data?.service?.map((service, i) => (
            <Services key={i} i={i} service={service} />
          ))}
        </div>
      )}
      <div className="size-[200px] mx-auto my-20">
        <video
          autoPlay
          loop
          muted
          className="size-full object-contain"
        >
          <source src="/image/Smonkey.mov" type="video/quicktime" />
            <source src="/image/Smonkey.WEBM" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Service;
