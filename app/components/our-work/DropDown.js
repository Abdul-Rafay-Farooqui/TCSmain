import React, { useState } from "react";
import content from "@content/our-work.json";

const DropDown = ({ tabs, activeTab, handleTabClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown toggle
  const { globals } = content;
  return (
    <div className="block lg:hidden px-2">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="text-tcs-banana pb-2 border-b border-b-tcs-banana flex justify-between text-2xl w-full text-left"
      >
        <span>{tabs.find((tab) => tab.index === activeTab)?.name}</span>
        <span>
          <img
            width="10"
            height="10"
            className="mt-2"
            src={globals.dropdown}
            alt="chevron-down"
          />
        </span>
      </button>
      {isDropdownOpen && (
        <div className="mt-2 relative bg-tcs-black rounded-b-lg p-2">
          {tabs
            .filter((tab) => tab.id !== activeTab)
            .map((tab) => (
              <p
                className="r-transition block text-tcs-white text-xl p-2 hover:bg-tcs-banana hover:text-tcs-black rounded-md"
                key={tab?.index}
                onClick={() => {
                  handleTabClick(tab?.index);
                  setIsDropdownOpen(false);
                }}
              >
                {tab?.name}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
