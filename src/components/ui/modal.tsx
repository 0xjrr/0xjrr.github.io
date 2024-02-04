import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import Project from "@/interfaces/project";

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
      className="fixed z-auto top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 flex items-center justify-center"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2">
        <h2 className="text-3xl font-bold">{selectedProject?.title}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          {selectedProject?.description}
        </p>
        <Button
          color="primary"
          variant="light"
          onPress={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
