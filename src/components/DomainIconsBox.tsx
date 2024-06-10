import React from "react";

// Define the props for the component
interface DomainIconsBoxProps {
  children: React.ReactNode;
  name: string;
}

const DomainIconsBox: React.FC<DomainIconsBoxProps> = ({ children, name }) => {
  return (
    <div className="border rounded-lg p-4 w-full max-w-xs mx-auto">
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <div className="flex justify-center space-x-2">{children}</div>
    </div>
  );
};

export default DomainIconsBox;
