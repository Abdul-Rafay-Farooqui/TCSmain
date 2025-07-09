"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import DropDown from "./DropDown";
import { getOurWorkPageData } from "@/lib/out-work";

const TabView = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setIsLoading] = useState(true);
  const [caseStudies, setCaseStudies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOurWorkPageData(activeTab);
        setCaseStudies(res?.main);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsLoading(true);
  };

  return (
    <div className="mt-0 sm:mt-20 pt-4">
      {/* Dropdown for small screens */}
      {tabs?.length > 0 && (
        <DropDown
          tabs={tabs}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      )}

      {/* Tabs for larger screens */}
      <div className="hidden lg:flex py-7 bg-transparent border-b border-b-tcs-banana ">
        {tabs.map((tab) => (
          <p
            className={`${
              tab?.index === activeTab
                ? "text-tcs-banana text-2xl"
                : "text-tcs-white text-xl hover:-translate-y-1 hover:scale-110"
            } r-transition mr-10 cursor-none`}
            key={tab?.index}
            onClick={() => handleTabClick(tab?.index)}
          >
            {tab?.name}
          </p>
        ))}
      </div>

      {/* Case studies grid */}
      {loading ? (
        <div className="flex items-center justify-center my-20">
          <div className="animate-spin rounded-full border-4 border-t-4 border-tcs-black border-t-tcs-banana w-16 h-16"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-7 py-8">
          {caseStudies.map((caseStudy, i) => (
            <Card key={i} caseStudy={caseStudy} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabView;
