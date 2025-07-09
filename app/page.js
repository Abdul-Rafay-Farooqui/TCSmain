"use client";

import Banner from "@components/home/Banner";
import Marquee from "./components/home/Marquee";
import Services from "./components/home/Services";
import OurWork from "./components/home/OurWork";
import { getHomePageData } from "@/lib/home";
import AppLayout from "./components/AppLayout";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getHomePageData();
        setData(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <AppLayout>
      <section className="px-4 lg:px-20 3xl:px-[52px]  sm:mt-1 py-1 pt-4">
        <Banner data={data?.banner} />
      </section>
      <Marquee data={data?.marquee} />
      <section className="px-4 lg:px-20 sm:py-11 3xl:px-[52px]">
        <Services data={data?.services} />
        {loading ? (
          <div className="flex items-center justify-center my-20">
            <div className="animate-spin rounded-full border-4 border-t-4 border-tcs-black border-t-tcs-banana w-16 h-16"></div>
          </div>
        ) : (
          <OurWork data={data?.our_work} />
        )}
      </section>
    </AppLayout>
  );
}
