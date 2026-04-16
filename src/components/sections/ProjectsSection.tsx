"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Project from "@/interfaces/project";

interface ProjectsSectionProps {
  projects: Project[];
  isModalOpen: boolean;
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({
  projects,
  isModalOpen,
  onSelectProject,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center space-y-6 py-14"
    >
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {projects.map((project: Project) => (
          <Card
            className="cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-200"
            key={project.title}
            onClick={() => {
              if (!isModalOpen) {
                onSelectProject(project);
              }
            }}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
