import React from 'react';

type Tab = {
  label: string;
  value: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTab: string;
  onTabClick: (value: string) => void;
};

const Tabs = ({ tabs, selectedTab, onTabClick }: TabsProps) => {
  return (
    <div className="flex border-b-2 border-gray-200 shadow-bottom">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 text-sm font-medium ${
            selectedTab === tab.value
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-500'
          } hover:text-purple-600 transition-colors`}
          onClick={() => onTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
