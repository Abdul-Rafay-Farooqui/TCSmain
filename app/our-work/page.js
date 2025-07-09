"use client";
import Header from "@/app/components/our-work/Header";
import TabView from "@/app/components/our-work/TabView";
import { getOurWorkPageCategories } from "@/lib/out-work";
import { useEffect, useState } from "react";

const OurWorkFilter = () => {
  const [tabs, setTabs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOurWorkPageCategories();
        setTabs(res?.category);
      } catch (error) {
        console.error("Error fetching filters:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="px-5 xl:px-20 3xl:px-[52px]">
        <Header />
        <TabView tabs={tabs} />
      </div>
    </div>
  );
};

export default OurWorkFilter;
