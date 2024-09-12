import React from 'react';

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
}

export default function MenuItem({
  icon: Icon,
  label,
  isActive,
}: MenuItemProps) {
  return (
    <div
      className={`flex mb-3 items-center p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-700 hover:rounded-md ${
        isActive ? 'bg-gray-700 rounded-md' : ''
      }`}
    >
      <Icon className="h-5 w-5 text-gray-400" />
      <span className="ml-3 text-white">{label}</span>
    </div>
  );
}
