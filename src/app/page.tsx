import Image from "next/image";
import { MainPage } from "@/components/main";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center ">
      <MainPage />
    </main>
  );
}
