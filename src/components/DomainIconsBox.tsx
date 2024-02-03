import React from "react";

// Define the props for the component
interface DomainIconsBoxProps {
  children: React.ReactNode;
  name: string;
}

const DomainIconsBox: React.FC<DomainIconsBoxProps> = ({ children, name }) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="flex items-center bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden min-w-[360px] md:min-w-[450px] lg:min-w-[450px]">
        {/* Domain name section */}
        <div className="p-4 flex-grow">
          <p className="text-lg font-bold text-gray-500 dark:text-gray-300">{name}</p>
        </div>

        {/* Icons section */}
        <div className="flex items-center space-x-4 p-4 bg-gray-200 dark:bg-gray-700 justify-end">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DomainIconsBox;
