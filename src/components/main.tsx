"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import DomainIconsBox from "./DomainIconsBox";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Tooltip, Button } from "@nextui-org/react";
import {
  IconAirplaneSharp,
  IconBrandKotlin,
  IconDjango,
  IconGithub,
  IconGolang,
  IconGooglecloud,
  IconJava,
  IconKubernetes,
  IconLinkedin,
  IconLogoDocker,
  IconLogoFirebase,
  IconMail,
  IconMicrosoftazure,
  IconNextjs,
  IconPython,
  IconPytorch,
  IconReact,
  IconScikitlearn,
  IconTailwind,
  IconTensorflow,
  IconTypescript,
} from "./icons/Icons";
import ProjectModal from "./ui/modal";
import Project from "@/interfaces/project";

const MockProjects: Project[] = [
  {
    title: "House Quest Mobile App",
    description:
      "Multi-user Android and iOS app for houseshold members to manage tasks and chores. Built with React Native, Firebase, and TypeScript.",
      github: "https://github.com/0xjrr/HouseQuest",
  },
  {
    title: "Sensor Data Collection And Analysis",
    description:
      "Project to collect and analyze sensor data from IoT devices. Built with Docker, MQTT, Golang, JavaScript, Python, gRPC, and MySQL.",
      github: "https://github.com/0xjrr/iot-project-fcul",
  },
  {
    title: "Django backend Web App and REST API",
    description:
      "Backend for a Web App and REST API. Built with Django, Python and SQLite.",
      github: "https://github.com/0xjrr/meta-backend-django-capstone"
  },
  {
    title: "React Web App",
    description: " Web app built with React, and ChackraUI",
    github: "https://github.com/0xjrr/capstone-frontend-littlelemon",
  },
];


export function MainPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="fixed top-0 right-0 m-4 h-7 w-7">
          <ThemeToggle />
        </div>
        <header className="flex flex-col items-center justify-center space-y-6 py-12">
          <Avatar className="h-32 w-32">
            <AvatarImage
              className="filter grayscale"
              alt="Profile picture"
              src="https://media.licdn.com/dms/image/D5603AQHnlhMY3qqTRw/profile-displayphoto-shrink_200_200/0/1684162556234?e=1712188800&v=beta&t=Yss1a58_lLlHLwVRYob5ZeGlJgJlAm4I9Asc-bTDxUI"
            />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold">Ricardo Ribeiro</h1>

          <div className="text-lg text-gray-500 dark:text-gray-400 flex flex-wrap justify-center ">
            <span className="px-2 text-2xl ">Data Science </span>{" "}
            <IconAirplaneSharp className="h-7 w-7" />{" "}
            <span className="px-2 text-2xl ">Software Engineering</span>
          </div>
        </header>
        <nav className="flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <Link className="text-lg font-medium hover:underline" href="#about">
            About
          </Link>
          <Link
            className="text-lg font-medium hover:underline"
            href="#projects"
          >
            Projects
          </Link>
          <Link className="text-lg font-medium hover:underline" href="#contact">
            Contact
          </Link>
        </nav>
        <section
          id="about"
          className="flex flex-col items-center justify-center space-y-6 py-12"
        >
          <h2 className="text-3xl font-bold">About</h2>
          <p className="text-gray-500 dark:text-gray-400 text-justify w-4/5 lg:w-2/4 md:w-3/4 ">
            Welcome to my corner on the web! I&apos;m Ricardo, currently in
            Lisbon, Portugal. At the moment I&apos;m working as a Data
            Scientist, while also pursuing advanced studies in Computer Science.
            My passion lies in learning, developing software, solving complex
            data problems, and building cool projects. My expertise spans
            machine learning, software development, and data engineering, with
            proficiency in Python, JavaScript, Java, and Golang. I&apos;m
            constantly on the lookout for new technologies and languages to
            master.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-justify w-4/5 lg:w-2/4 md:w-3/4 ">
            I am currently enhancing my technical skillset with a Master&apos;s
            degree in Computer Science at Faculdade de Ciências da Universidade
            de Lisboa, focusing on both the theoretical and practical aspects of
            software engineering. This, coupled with my background in
            environmental engineering and data science, provides me with a
            unique perspective on how technology can be used to address complex
            challenges.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-justify w-4/5 lg:w-2/4 md:w-3/4 ">
            As I navigate this exciting transition towards software engineering,
            I am eager to apply my skills in new contexts, tackle challenges
            head-on, and contribute to meaningful projects that push
            technological boundaries. I invite you to connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/jr-ribeiro/"
              className="text-blue-500 hover:underline"
            >
              Linkedin
            </a>{" "}
            and explore my coding endeavors on{" "}
            <a
              href="https://github.com/0xjrr/"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </section>
        <section className="flex flex-col items-center justify-center space-y-6 py-12">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <DomainIconsBox name="Languages">
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Go
                  </div>
                </div>
              }
            >
              <IconGolang />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    TypeScript & JS
                  </div>
                </div>
              }
            >
              <IconTypescript />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Python
                  </div>
                </div>
              }
            >
              <IconPython />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Java
                  </div>
                </div>
              }
            >
              <IconJava />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Kotlin
                  </div>
                </div>
              }
            >
              <IconBrandKotlin />
            </Tooltip>
          </DomainIconsBox>
          <DomainIconsBox name="Frameworks">
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    ReactJS & React Native
                  </div>
                </div>
              }
            >
              <IconReact />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Next.js
                  </div>
                </div>
              }
            >
              <IconNextjs />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Tailwind CSS
                  </div>
                </div>
              }
            >
              <IconTailwind />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Django
                  </div>
                </div>
              }
            >
              <IconDjango />
            </Tooltip>
          </DomainIconsBox>
          <DomainIconsBox name="Cloud Infra">
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Microsoft Azure
                  </div>
                </div>
              }
            >
              <IconMicrosoftazure />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Google Cloud
                  </div>
                </div>
              }
            >
              <IconGooglecloud />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Firebase
                  </div>
                </div>
              }
            >
              <IconLogoFirebase />
            </Tooltip>
          </DomainIconsBox>
          <DomainIconsBox name="Containers">
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Docker
                  </div>
                </div>
              }
            >
              <IconLogoDocker />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Kubernetes
                  </div>
                </div>
              }
            >
              <IconKubernetes />
            </Tooltip>
          </DomainIconsBox>
          <DomainIconsBox name="Machine Learning">
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    TensorFlow
                  </div>
                </div>
              }
            >
              <IconTensorflow />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    PyTorch
                  </div>
                </div>
              }
            >
              <IconPytorch />
            </Tooltip>
            <Tooltip
              showArrow={true}
              color={"default"}
              content={
                <div className="px-1 py-1  rounded-md  bg-opacity-90 bg-slate-300 dark:bg-slate-800">
                  <div className="text-small font-bold text-gray-900 dark:text-gray-200">
                    Scikit-learn
                  </div>
                </div>
              }
            >
              <IconScikitlearn />
            </Tooltip>
          </DomainIconsBox>
        </section>

        <section
          id="projects"
          className="flex flex-col items-center justify-center space-y-6 py-12"
        >
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {MockProjects.map((project: Project) => (
              <Card
                className="mx-4 cursor-pointer hover:bg-gray-150 dark:hover:bg-gray-700 hover:shadow-lg transition duration-150 ease-in-out max-w-2xl"
                key={project.title}
                onClick={() => {
                  console.log("Clicked on project: ", project.title);
                  if (!isModalOpen) {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }
                }}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center space-y-6 py-12"
        >
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-500 dark:text-gray-400 text-justify w-4/5 lg:w-2/4 md:w-3/4 ">
            If you&apos;d like to get in touch, feel free to reach out to me or
            connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/jr-ribeiro/"
              className="text-current hover:underline"
            >
              Linkedin
            </a>{" "}
            and explore my coding endeavors on{" "}
            <a
              href="https://github.com/0xjrr/"
              className="text-current hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <div className="grid grid-cols-3 gap-6">
            <Link href="https://github.com/0xjrr/">
              <IconGithub className="h-8 w-8" />
            </Link>
            <Link href="https://www.linkedin.com/in/jr-ribeiro/">
              <IconLinkedin className="h-8 w-8" />
            </Link>
            <Link href="mailto:">
              <IconMail className="h-8 w-8" />
            </Link>
          </div>
        </section>
      </div>
      {isModalOpen && (
        <ProjectModal
          setIsModalOpen={setIsModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </>
  );
}
