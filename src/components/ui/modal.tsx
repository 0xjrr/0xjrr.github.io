import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Project from "@/interfaces/project";
import { IconGithub } from "../icons/Icons";
import Link from "next/link";
import { ModalContents } from "./modalContents";

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
      className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 flex items-center justify-center backdrop-blur-md"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3 max-h-screen-90 flex flex-col"
      >
        <ModalContents
          className="overflow-auto scrollbar-thin flex-grow"
          project={selectedProject}
        />
        <div className="py-4 flex flex-col sm:flex-row flex-grow justify-center space-y-4 sm:space-y-0 sm:space-x-4 flex-shrink-0">
          {/* github button */}
          <Link
            className="flex-grow"
            target="_blank"
            href={!!selectedProject?.github ? selectedProject?.github : ""}
          >
            <div className="cursor-pointer flex items-center justify-center p-2 flex-grow">
              <div className="flex items-center hover:bg-gray-150 dark:hover:bg-gray-500 hover:shadow-lg bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden max-w-lg flex-grow">
                <div className="p-4 flex-grow">
                  <p className="text-sm md:text-lg font-bold text-gray-500 dark:text-gray-300">
                    View Github
                  </p>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4 p-4 bg-inherit justify-end">
                  <IconGithub className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          </Link>
          {/* cancel button */}
          <div
            onClick={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
            className="cursor-pointer flex items-center justify-center p-2 flex-grow"
          >
            <div className="flex items-center hover:bg-red-300 dark:hover:bg-red-500 hover:shadow-lg bg-red-200 dark:bg-red-400 shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
              <div className="p-4 flex-grow">
                <p className="text-sm md:text-lg font-bold text-gray-500 dark:text-gray-200">
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
