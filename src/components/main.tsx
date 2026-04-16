"use client";
import React, { useEffect, useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import ProjectModal from "./ui/modal";
import SnakeGame from "./SnakeGame";
import BugSquasher from "./BugSquasher";
import { projects } from "@/data/projects";
import Project from "@/interfaces/project";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function MainPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBugGameOpen, setIsBugGameOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const konamiIndex = React.useRef(0);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === KONAMI[konamiIndex.current]) {
      konamiIndex.current += 1;
      if (konamiIndex.current === KONAMI.length) {
        konamiIndex.current = 0;
        setIsBugGameOpen(true);
      }
    } else {
      konamiIndex.current = e.key === KONAMI[0] ? 1 : 0;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {isBugGameOpen && <BugSquasher onClose={() => setIsBugGameOpen(false)} />}

      <div className="flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="fixed top-0 right-0 m-4 z-40">
          <ThemeToggle />
        </div>

        <HeroSection onPlaySnake={() => setIsGameOpen(true)} />

        <div className="w-full max-w-4xl px-4 divide-y divide-gray-200 dark:divide-gray-700">
          <AboutSection />
          <TechStackSection />
          <ProjectsSection
            projects={projects}
            isModalOpen={isModalOpen}
            onSelectProject={(project) => {
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
          />
          <ContactSection />
        </div>

        <FooterSection />
      </div>

      {isModalOpen && (
        <ProjectModal
          setIsModalOpen={setIsModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
      {isGameOpen && <SnakeGame onClose={() => setIsGameOpen(false)} />}
    </>
  );
}
