import React, { ReactNode, createContext, useContext } from 'react';

type TabsContextType = {
  selectedTab: string;
  onTabClick: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

type TabsProps = {
  children: ReactNode;
  selectedTab: string;
  onTabClick: (value: string) => void;
};

const Tabs = ({ children, selectedTab, onTabClick }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ selectedTab, onTabClick }}>
      <div className="flex border-b-2 border-gray-200 shadow-bottom">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

type TabProps = {
  value: string;
  label: string;
  children?: ReactNode;
};

const Tab = ({ value, label }: TabProps) => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tab must be used within a Tabs component');
  }

  const { selectedTab, onTabClick } = context;

  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        selectedTab === value
          ? 'text-purple-600 border-b-2 border-purple-600'
          : 'text-gray-500'
      } hover:text-purple-600 transition-colors`}
      onClick={() => onTabClick(value)}
    >
      {label}
    </button>
  );
};

Tabs.Tab = Tab;

export default Tabs;
