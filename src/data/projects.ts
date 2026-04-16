import Project from "@/interfaces/project";

export const projects: Project[] = [
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
