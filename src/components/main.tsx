"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import DomainIconsBox from "./DomainIconsBox";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Tooltip } from "@nextui-org/react";
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
import SnakeGame from "./SnakeGame";
import BugSquasher from "./BugSquasher";

const MockProjects: Project[] = [
  {
    title: "HouseQuest — Household Mobile App",
    description:
      "Cross-platform Android & iOS app for household members to coordinate tasks, share real-time locations, and stay connected. Built with React Native, Firebase, and TypeScript.",
    github: "https://github.com/0xjrr/HouseQuest",
    readme: `HouseQuest is a mobile application developed for the Mobile Computing course at the University of Lisbon (2023/2024). It streamlines household management and enhances communication among household members.

Key Features

• Real-Time Location Sharing — members can share their live location with the household, fostering safety and connectedness. Location sharing is fully consensual and privacy-focused.

• User & Household Management — create or join households, update profiles, and manage members through a secure, intuitive interface.

• Announcement System — a built-in board for posting and viewing household announcements, making information sharing effortless.

• Cross-Platform — one codebase for both Android and iOS, built with React Native and Expo.

Tech Stack: React Native · TypeScript · Firebase (Auth, Firestore, Storage) · Expo`,
    download:
      "https://github.com/0xjrr/HouseQuest/raw/main/android-apk/app-release.apk",
    videos: [
      "https://github.com/0xjrr/HouseQuest/raw/main/pitch-video/VID-20240126-WA0003.mp4",
    ],
    images: [
      "https://raw.githubusercontent.com/0xjrr/HouseQuest/main/assets/images/splash.png",
    ],
  },
  {
    title: "PLush Language Compiler",
    description:
      "A full compiler pipeline for PLush — a statically-typed C-like language. Covers lexing, parsing, semantic analysis, and LLVM IR code generation.",
    github: "https://github.com/0xjrr/plush-compliler",
    readme: `PLush is a statically-typed, high-level programming language designed to teach the fundamentals of programming language design and compiler construction.

The compiler was built as a final-year project for the Compilers course at FCUL (2024).

Pipeline

• Lexer — tokenises PLush source files using PLY (Python Lex-Yacc)
• Parser — LALR(1) grammar producing a typed Abstract Syntax Tree
• Semantic Checker — type and scope analysis across functions and globals
• LLVM IR Generator — emits LLVM IR which is compiled to native code via Clang

Language Features

• Data types: int, float, double, string, bool, and nested arrays ([int], [[int]], …)
• Mutable (var) and immutable (val) variables
• if/else, while, do-while control flow
• Functions with typed parameters and return values
• Arithmetic, bitwise, logical, and comparison operators
• Power operator (^) via C's pow FFI
• Increment/decrement (++, --, +=, -=)
• break and continue in loops
• Import system for modular code reuse across .pl files
• Built-in print_int, print_double, print_string, and printf

Tech Stack: Python · PLY (Lex-Yacc) · LLVM IR · Clang · Bash`,
  },
  {
    title: "IoT Sensor Data Collection & Analysis",
    description:
      "End-to-end IoT platform for collecting, streaming, and analysing sensor data from connected devices. Built with Docker, MQTT, Golang, Python, gRPC, and MySQL.",
    github: "https://github.com/0xjrr/iot-project-fcul",
    readme: `A full-stack IoT data platform developed for the Internet of Things course at FCUL.

Architecture

• IoT Devices — sensors publish readings over MQTT to a central broker
• MQTT Broker — decouples producers from consumers; handles fan-out to multiple subscribers
• Data Ingestion Service (Go) — subscribes to MQTT topics, validates payloads, and persists readings to MySQL via gRPC calls
• gRPC Backend (Go) — exposes a typed RPC interface for data storage and retrieval
• Analytics & Processing (Python) — scheduled scripts aggregate data, detect anomalies, and generate reports
• Web Dashboard (JavaScript) — real-time visualisation of sensor readings with charting and alerting
• Containerised — every service is packaged as a Docker container and orchestrated with Docker Compose

Tech Stack: Docker · Docker Compose · MQTT (Mosquitto) · Golang · gRPC · Python · JavaScript · MySQL`,
    images: [
      "https://github.com/0xjrr/iot-project-fcul/raw/main/cloud-infra/frontend_web/src/app/logo/logo.webp",
    ],
  },
  {
    title: "Little Lemon — Django REST API & Web App",
    description:
      "Backend REST API and server-rendered web app for a Mediterranean restaurant. Built with Django, Django REST Framework, Djoser auth, and MySQL.",
    github: "https://github.com/0xjrr/meta-backend-django-capstone",
    readme: `Capstone project for the Meta Back-End Developer Certificate (2023).

The project implements a production-ready backend for the fictional Little Lemon restaurant, featuring both a classic server-rendered web interface and a JSON REST API.

Features

• Menu API — full CRUD for menu items (title, price, inventory) via /restaurant/api/menu/
• Booking API — reservation management with authentication enforcement; only authenticated users can list, create, update, or delete bookings
• Token Authentication — powered by Djoser + DRF token auth; endpoints at /auth/ for registration and token retrieval
• Admin Panel — Django admin for managing Menu and Booking models
• Server-Rendered Views — HTML pages served with Django templates (index, booking form)
• Unit Tests — model and view tests with APIClient verifying status codes and serializer output

Tech Stack: Django 4.2 · Django REST Framework · Djoser · MySQL · Python · HTML/CSS`,
  },
  {
    title: "Little Lemon — React Frontend",
    description:
      "Multi-page restaurant website with a reservation system, built with ReactJS, ChakraUI, Formik, and Yup validation.",
    github: "https://github.com/0xjrr/capstone-frontend-littlelemon",
    readme: `Capstone project for the Meta Front-End Developer Certificate (2023).

A fully responsive, multi-page website for the Little Lemon Mediterranean restaurant, designed from scratch in Figma and implemented in React.

Pages

• Homepage — hero section, featured specials, and about preview
• Menu — full menu grid with dish cards (name, price, description, image)
• About — restaurant story and team photos
• Reserve — reservation form with live slot availability

Reservation Form Highlights

• Built with Formik + Yup for field-level validation (name, email, date, time, guest count)
• Date input triggers a mock API call (seeded random) to populate available time slots
• Submit simulates a real async API call with a 50 % success/failure rate
• On success the button disables and shows a confirmation message; on failure it prompts a retry

Tech Stack: ReactJS · ChakraUI · React Router · Formik · Yup · JavaScript`,
  },
];

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
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

  const tooltipClasses = {
    content: "bg-gray-800 text-gray-100 text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg border border-gray-700",
  };

  return (
    <>
      {isBugGameOpen && <BugSquasher onClose={() => setIsBugGameOpen(false)} />}

      <div className="flex flex-col items-center justify-center w-full bg-gray-100 dark:bg-gray-900 min-h-screen">
        {/* Theme toggle */}
        <div className="fixed top-0 right-0 m-4 z-40">
          <ThemeToggle />
        </div>

        {/* Hero */}
        <header className="flex flex-col items-center justify-center space-y-5 pt-20 pb-10 w-full">
          <div className="ring-4 ring-gray-300 dark:ring-gray-600 rounded-full p-1 shadow-lg">
            <Avatar className="h-32 w-32">
              <AvatarImage
                className="filter grayscale hover:filter-none transition duration-500"
                alt="Profile picture"
                src="https://avatars.githubusercontent.com/u/86163146?v=4"
              />
              <AvatarFallback>RR</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Ricardo Ribeiro</h1>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <IconAirplaneSharp className="h-5 w-5" />
            <span className="text-xl tracking-wide">Software Engineering</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-3 pt-2">
            {["#about", "#projects", "#contact"].map((href) => (
              <Link
                key={href}
                href={href}
                className="px-5 py-1.5 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
            <button
              onClick={() => setIsGameOpen(true)}
              className="px-5 py-1.5 rounded-full text-sm font-medium border border-green-400 dark:border-green-600 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition"
            >
              🐍 Play
            </button>
          </nav>
        </header>

        <div className="w-full max-w-4xl px-4 divide-y divide-gray-200 dark:divide-gray-700">
          {/* About */}
          <section
            id="about"
            className="flex flex-col items-center justify-center space-y-5 py-14"
          >
            <h2 className="text-3xl font-bold">About</h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400 text-justify max-w-2xl w-full">
              <p>
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
              <p>
                I am currently enhancing my technical skillset with a Master&apos;s
                degree in Computer Science at Faculdade de Ciências da Universidade
                de Lisboa, focusing on both the theoretical and practical aspects of
                software engineering. This, coupled with my background in
                environmental engineering and data science, provides me with a
                unique perspective on how technology can be used to address complex
                challenges.
              </p>
              <p>
                As I navigate this exciting transition towards software engineering,
                I am eager to apply my skills in new contexts, tackle challenges
                head-on, and contribute to meaningful projects that push
                technological boundaries. I invite you to connect with me on{" "}
                <a
                  href="https://www.linkedin.com/in/jr-ribeiro/"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
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
            </div>
          </section>
          {/* Tech Stack */}
          <section className="flex flex-col items-center justify-center space-y-6 py-14">
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              <DomainIconsBox name="Languages">
                <Tooltip showArrow classNames={tooltipClasses} content="Go"><IconGolang className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="TypeScript & JS"><IconTypescript className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Python"><IconPython className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Java"><IconJava className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Kotlin"><IconBrandKotlin className="h-6 w-6" /></Tooltip>
              </DomainIconsBox>
              <DomainIconsBox name="Frameworks">
                <Tooltip showArrow classNames={tooltipClasses} content="React Native"><IconReact className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Next.js & ReactJS"><IconNextjs className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Tailwind CSS"><IconTailwind className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Django"><IconDjango className="h-6 w-6" /></Tooltip>
              </DomainIconsBox>
              <DomainIconsBox name="Cloud Infra">
                <Tooltip showArrow classNames={tooltipClasses} content="Microsoft Azure"><IconMicrosoftazure className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Google Cloud"><IconGooglecloud className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Firebase"><IconLogoFirebase className="h-6 w-6" /></Tooltip>
              </DomainIconsBox>
              <DomainIconsBox name="Containers">
                <Tooltip showArrow classNames={tooltipClasses} content="Docker"><IconLogoDocker className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Kubernetes"><IconKubernetes className="h-6 w-6" /></Tooltip>
              </DomainIconsBox>
              <DomainIconsBox name="Machine Learning">
                <Tooltip showArrow classNames={tooltipClasses} content="TensorFlow"><IconTensorflow className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="PyTorch"><IconPytorch className="h-6 w-6" /></Tooltip>
                <Tooltip showArrow classNames={tooltipClasses} content="Scikit-learn"><IconScikitlearn className="h-6 w-6" /></Tooltip>
              </DomainIconsBox>
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="flex flex-col items-center justify-center space-y-6 py-14"
          >
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
              {MockProjects.map((project: Project) => (
                <Card
                  className="cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-md transition-all duration-200"
                  key={project.title}
                  onClick={() => {
                    if (!isModalOpen) {
                      setSelectedProject(project);
                      setIsModalOpen(true);
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

          {/* Contact */}
          <section
            id="contact"
            className="flex flex-col items-center justify-center space-y-6 py-14"
          >
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-xl">
              If you&apos;d like to get in touch, feel free to connect on{" "}
              <a
                href="https://www.linkedin.com/in/jr-ribeiro/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>{" "}
              or explore my work on{" "}
              <a
                href="https://github.com/0xjrr/"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
            <div className="flex items-center gap-8 pt-2">
              <Link
                href="https://github.com/0xjrr/"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="GitHub"
              >
                <IconGithub className="h-8 w-8" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jr-ribeiro/"
                target="_blank"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="h-8 w-8" />
              </Link>
              <Link
                href="mailto:jr@0xjrr.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Email"
              >
                <IconMail className="h-8 w-8" />
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-xs text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800 mt-8">
          <p>© {new Date().getFullYear()} Ricardo Ribeiro · Built with Next.js &amp; Tailwind</p>
          <p className="mt-1 select-none text-[10px] opacity-30 tracking-widest">↑↑↓↓←→←→BA</p>
        </footer>
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
