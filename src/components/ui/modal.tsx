import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Project from "@/interfaces/project";
import { IconGithub } from "../icons/Icons";
import Link from "next/link";

export default function ProjectModal({
  setIsModalOpen,
  selectedProject,
  setSelectedProject,
}: {
  setIsModalOpen: (value: boolean) => void;
  selectedProject: Project | null;
  setSelectedProject: (value: Project | null) => void;
}) {
  return (
    <div
      onClick={() => {
        setIsModalOpen(false);
      }}
      className="fixed z-auto top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 flex items-center justify-center backdrop-blur-md"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-3/4">
        <h2 className="text-3xl font-bold">{selectedProject?.title}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {selectedProject?.description}
        </p>
        <div className="flex justify-center space-x-4">
          {/* github button */}
          <Link target="_blank" href={!!selectedProject?.github?selectedProject?.github:''}> 
          <div className="cursor-pointer flex items-center  justify-center p-2">
            <div className="flex items-center hover:bg-gray-150 dark:hover:bg-gray-500 hover:shadow-lg bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden min-w-[360px] md:min-w-[450px] lg:min-w-[450px]">
              <div className="p-4 flex-grow ">
                <p className="text-lg font-bold text-gray-500 dark:text-gray-300">
                  Github
                </p>
              </div>

              {/* Icons */}
              <div className="flex items-center space-x-4 p-4 bg-inherit justify-end">
                <IconGithub />
              </div>
            </div>
          </div>
          </Link>
          {/* cancel button */}
          <div onClick={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }} className="cursor-pointer flex items-center justify-center p-2">
            <div className="flex items-center hover:bg-red-300 dark:hover:bg-red-500 hover:shadow-lg bg-red-200 dark:bg-red-400 shadow-lg rounded-lg overflow-hidden min-w-[360px] md:min-w-[450px] lg:min-w-[450px]">
              <div className="p-4 flex-grow">
                <p className="text-lg font-bold text-gray-500 dark:text-gray-200">
                  Close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
