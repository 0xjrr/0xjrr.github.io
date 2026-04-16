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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full sm:w-4/5 md:w-2/3 lg:w-3/5 max-w-2xl mx-4 flex flex-col max-h-[90vh]"
      >
        <ModalContents
          className="overflow-y-auto flex-1 min-h-0 scrollbar-thin p-2"
          project={selectedProject}
        />
        <div className="p-4 flex flex-col sm:flex-row gap-3 border-t border-gray-100 dark:border-gray-700 flex-shrink-0">
          {/* github button */}
          <Link
            className="flex-1"
            target="_blank"
            rel="noopener noreferrer"
            href={!!selectedProject?.github ? selectedProject?.github : "#"}
          >
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                View on GitHub
              </p>
              <IconGithub className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </div>
          </Link>
          {/* close button */}
          <button
            onClick={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
            className="flex-1 flex items-center justify-center p-3 rounded-xl bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-800/50 transition"
          >
            <p className="text-sm font-semibold text-red-700 dark:text-red-300">
              Close
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
