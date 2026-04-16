import React from "react";

// Define the props for the component
interface DomainIconsBoxProps {
  children: React.ReactNode;
  name: string;
}

const DomainIconsBox: React.FC<DomainIconsBoxProps> = ({ children, name }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 w-full mx-auto bg-white dark:bg-gray-800/50 shadow-sm">
      <h3 className="text-sm font-semibold mb-3 text-center text-gray-500 dark:text-gray-400 uppercase tracking-wider">{name}</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">{children}</div>
    </div>
  );
};

export default DomainIconsBox;
