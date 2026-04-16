"use client";
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { IconAirplaneSharp } from "@/components/icons/Icons";

interface HeroSectionProps {
  onPlaySnake: () => void;
}

export default function HeroSection({ onPlaySnake }: HeroSectionProps) {
  return (
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
          onClick={onPlaySnake}
          className="px-5 py-1.5 rounded-full text-sm font-medium border border-green-400 dark:border-green-600 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition"
        >
          🐍 Play
        </button>
      </nav>
    </header>
  );
}
