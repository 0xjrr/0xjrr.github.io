/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/MDlOYiSCNhC
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import ThemeToggle from "./ThemeToggle";

export function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="fixed top-0 right-0 m-4 h-7 w-7">
        <ThemeToggle />
      </div>
      <header className="flex flex-col items-center justify-center space-y-6 py-12">
        <Avatar className="h-32 w-32">
          <AvatarImage className="filter grayscale" alt="Profile picture" src="https://media.licdn.com/dms/image/D5603AQHnlhMY3qqTRw/profile-displayphoto-shrink_200_200/0/1684162556234?e=1712188800&v=beta&t=Yss1a58_lLlHLwVRYob5ZeGlJgJlAm4I9Asc-bTDxUI" />
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
        <Link className="text-lg font-medium hover:underline" href="#">
          About
        </Link>
        <Link className="text-lg font-medium hover:underline" href="#">
          Projects
        </Link>
        <Link className="text-lg font-medium hover:underline" href="#">
          Contact
        </Link>
      </nav>

      <section className="flex flex-col items-center justify-center space-y-6 py-12">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-4">
            <IconLogoDocker className="h-10 w-10" />
            <IconKubernetes className="h-10 w-10" />
          </div>
          <span className="px-2 text-3xl ">|</span>
          <div className="flex items-center gap-4">
            <IconTailwind className="h-10 w-10" />
            <IconReact className="h-10 w-10" />
            <IconDjango className="h-10 w-10" />
          </div>
          <span className="px-2 text-3xl ">|</span>
          <div className="flex items-center gap-4">
            <IconGolang className="h-10 w-10" />
            <IconTypescript className="h-10 w-10" />
            <IconJava className="h-10 w-10" />

            <IconPython className="h-10 w-10" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center space-y-6 py-12">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Description of Project 1
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Description of Project 2
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Description of Project 3
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function IconAirplaneSharp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 010 .15 15.42 15.42 0 00-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48zm-71.29 87.9z" />
    </svg>
  );
}

function IconKubernetes(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.95 13.5h-.23c-.18.11-.26.32-.18.5l.86 2.11c.83-.53 1.46-1.32 1.79-2.25l-2.23-.36h-.01m-3.45.29a.415.415 0 00-.38-.29h-.08l-2.22.37c.33.92.96 1.7 1.79 2.23l.85-2.07V14c.04-.05.04-.14.04-.21m1.83.81a.378.378 0 00-.51-.15c-.07.05-.12.08-.15.15h-.01l-1.09 1.97c.78.26 1.62.31 2.43.12.14-.03.29-.07.43-.12l-1.09-1.97h-.01m3.45-4.57L14.1 11.5l.01.03a.37.37 0 00-.04.53c.05.06.11.1.18.12l.01.01 2.17.62c.07-.97-.14-1.95-.65-2.78m-3.11.16c.01.21.18.37.39.36.08 0 .15-.02.21-.05h.01l1.83-1.31a4.45 4.45 0 00-2.57-1.24l.13 2.24m-1.94.31c.17.11.4.08.52-.09.05-.06.07-.13.08-.21h.01l.12-2.25c-.15.02-.3.05-.46.08-.8.18-1.54.58-2.12 1.16l1.84 1.31h.01m-.99 1.69c.2-.05.32-.26.26-.46 0-.08-.05-.14-.11-.19v-.01L8.21 10c-.52.86-.74 1.84-.63 2.82l2.16-.62v-.01m1.64.66l.62.3.62-.3.15-.67-.43-.53h-.69l-.43.53.16.67m10.89 1.32L20.5 6.5c-.09-.42-.37-.76-.74-.94l-7.17-3.43c-.37-.17-.81-.17-1.19 0L4.24 5.56c-.37.18-.65.52-.74.94l-1.77 7.67c-.05.2-.05.4 0 .59.01.06.03.12.05.18.03.09.08.19.13.27.03.04.05.08.09.11l4.95 6.18c.02 0 .05.04.05.06.1.09.19.16.28.22.12.08.26.14.4.17.11.05.23.05.32.05h8.12c.07 0 .14-.03.2-.05.05-.01.1-.03.14-.04.04-.02.07-.03.11-.05.05-.02.1-.05.15-.08.12-.08.23-.18.33-.28l.15-.2 4.8-5.98c.1-.12.17-.25.22-.38.02-.06.04-.12.05-.18.05-.19.05-.4 0-.59m-7.43 2.99c.02.06.04.12.07.17-.04.08-.06.17-.03.26.12.24.23.46.38.68.08.11.16.23.24.34 0 .03.03.08.04.12.12.2.06.46-.15.59s-.47.05-.59-.15c-.01-.03-.02-.05-.03-.08-.02-.03-.04-.09-.06-.09-.05-.15-.09-.28-.12-.41-.09-.25-.17-.49-.3-.72a.375.375 0 00-.21-.14l-.08-.16c-1.29.48-2.7.48-3.97-.01l-.1.18c-.07.01-.14.04-.19.09-.14.24-.24.49-.33.77-.03.13-.07.26-.12.4-.02 0-.04.07-.06.1a.43.43 0 01-.81-.29c.01-.03.03-.05.04-.08.04-.03.04-.08.04-.11.09-.12.16-.23.24-.35.16-.21.29-.45.39-.69a.54.54 0 00-.03-.25l.07-.18a5.611 5.611 0 01-2.47-3.09l-.2.03a.388.388 0 00-.23-.09c-.27.05-.51.13-.77.22-.11.06-.24.11-.37.15-.03.01-.07.02-.13.03a.438.438 0 01-.54-.27c-.07-.23.04-.47.28-.55.02 0 .05-.01.08-.01v-.01h.01l.11-.02c.14-.04.28-.04.41-.04.26 0 .52-.06.77-.12.08-.05.14-.11.19-.19l.19-.05c-.21-1.36.1-2.73.86-3.87l-.14-.12c0-.09-.03-.18-.08-.25-.2-.17-.41-.32-.64-.45-.12-.06-.24-.13-.36-.21-.02-.02-.06-.05-.08-.07l-.01-.01c-.2-.16-.25-.42-.11-.63.09-.1.21-.15.35-.15.11.01.21.05.3.12l.09.07c.1.09.19.2.28.3.18.19.37.37.58.52.08.04.17.05.26.03l.15.11c.75-.8 1.73-1.36 2.8-1.6.25-.06.52-.1.78-.12l.01-.18a.45.45 0 00.14-.23c.01-.26-.01-.52-.05-.77-.03-.13-.05-.27-.06-.41V5.1c-.02-.24.15-.45.39-.48s.44.15.47.38v.22c-.01.14-.03.28-.06.41-.04.25-.06.51-.05.77.02.1.07.17.14.22l.01.19c1.36.12 2.62.73 3.56 1.72l.16-.12c.09.02.18.01.26-.03.21-.15.41-.33.58-.52.09-.1.18-.2.28-.3.03-.02.07-.06.1-.06.17-.18.44-.18.59 0 .19.16.18.43 0 .6 0 .02-.03.04-.06.06a2.495 2.495 0 01-.44.28c-.23.13-.45.28-.64.45-.06.07-.09.15-.08.24l-.16.14a5.44 5.44 0 01.88 3.86l.19.05c.04.08.11.14.19.18.25.07.51.11.77.14h.41c.03.03.08.04.12.05.24.03.4.25.37.49-.05.23-.24.4-.48.37-.03-.01-.07-.01-.07-.02v-.01c-.06 0-.1-.01-.14-.02-.13-.04-.25-.09-.36-.15-.26-.1-.5-.17-.77-.21-.09 0-.17 0-.23.08-.07-.01-.13-.02-.19-.03-.41 1.31-1.31 2.41-2.47 3.11z" />
    </svg>
  );
}

function IconLogoDocker(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.55 132.55 0 00-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28-4.75 6.9a101.65 101.65 0 00-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 000 262.07a241.25 241.25 0 0014.75 86.83C26.39 379.35 43.72 402 66 415.74 91.22 431.2 132.3 440 178.6 440a344.23 344.23 0 0062.45-5.71 257.44 257.44 0 0081.69-29.73 223.55 223.55 0 0055.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.31 63.31 0 0015.2-22.36l2.14-6.18z" />
      <path d="M47.29 236.37H92.4a4 4 0 004-4v-40.48a4 4 0 00-4-4H47.29a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M109.5 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M172.9 236.37H218a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a3.87 3.87 0 004 4M235.36 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4 4 0 004 4M109.5 178.57h45.12a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.34 4.34 0 004 4M172.9 178.57H218a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a4 4 0 004 4M235.36 178.57h45.12a4.16 4.16 0 004-4v-40.48a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M235.36 120.53h45.12a4 4 0 004-4V76a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.17 4.17 0 004 4M298.28 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4" />
    </svg>
  );
}

function IconDjango(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
    </svg>
  );
}

function IconTailwind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
    </svg>
  );
}

function IconReact(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>
  );
}

function IconJava(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.557 23.22s-.982.571.699.765c2.037.232 3.079.199 5.324-.226 0 0 .59.37 1.415.691-5.033 2.157-11.39-.125-7.437-1.23zm-.615-2.815s-1.102.816.581.99c2.176.224 3.895.243 6.869-.33 0 0 .411.417 1.058.645-6.085 1.779-12.863.14-8.508-1.305zm5.185-4.775c1.24 1.428-.326 2.713-.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zm6.656 9.672s.727.599-.801 1.062c-2.905.88-12.091 1.146-14.643.035-.917-.399.803-.953 1.344-1.069.564-.122.887-.1.887-.1-1.02-.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-.749 16.044-1.95zm-10.754-7.813s-4.673 1.11-1.655 1.513c1.274.171 3.814.132 6.181-.066 1.934-.163 3.876-.51 3.876-.51s-.682.292-1.175.629c-4.745 1.248-13.911.667-11.272-.609 2.232-1.079 4.046-.956 4.046-.956zm8.383 4.685c4.824-2.506 2.593-4.915 1.037-4.591-.382.079-.552.148-.552.148s.142-.222.412-.318c3.079-1.083 5.448 3.193-.994 4.887 0 0 .075-.067.097-.126zM18.503 3.337s2.671 2.672-2.534 6.781c-4.174 3.296-.952 5.176-.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zm-5 25.629c4.63.296 11.74-.164 11.908-2.355 0 0-.324.831-3.826 1.49-3.952.744-8.826.657-11.716.18 0 0 .592.49 3.635.685z"
      />
    </svg>
  );
}

function IconGolang(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 640 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M400.1 194.8c-10.9 2.8-19.9 4.3-29.1 7.6-7.3 1.9-14.7 3.9-23.2 6.1l-.6.1c-4.2 1.2-4.6 1.3-8.5-3.2-4.7-5.3-8.1-8.7-14.6-11.9-19.7-9.6-38.7-6.8-56.4 4.7-21.2 13.7-32.1 34-31.8 59.2.3 25 17.4 45.5 41.2 48.9 22 2.8 39.8-4.6 53.8-20.5 2.1-2.6 4-5.3 6.1-8.3.8-1 1.5-2.1 2.3-3.3h-60.1c-6.5 0-8.1-4-5.9-9.3 4-9.7 11.5-25.9 15.9-34 .9-1.8 3.1-5.8 6.9-5.8h101.1c4.5-13.4 11.8-26.9 21.6-39.7 22.7-29.9 49.3-45.5 87.2-52 31.8-5.6 61.7-2.5 88.9 15.9 24.6 16.8 39.8 39.6 43.9 69.5 5.3 42.1-6.9 76.3-36.7 105.6-19.7 20.9-44.9 34-73.9 39.9-5.6 1-11.1 1.5-16.5 2-2.9.2-5.7.5-8.5.8-28.3-.6-54.2-8.7-76-27.4-15.3-13.3-25.9-29.6-31.1-48.5-3.7 7.3-8 14.4-14 21.1-21.6 29.6-50.9 48-87.9 52.9-30.6 4.1-58.9-1.8-83.9-20.5-23-17.5-36.1-40.5-39.5-69.2-4.1-34 5.9-65.4 26.4-91.3 22.2-29 51.5-47.4 87.3-53.9 29.3-6.2 57.3-1.9 82.6 15.3 16.5 10.9 28.3 25.8 36.1 43.9 1.9 2.8.6 4.4-3.1 5.3zm-351.8 5.6c-1.25 0-1.56-.6-.94-1.6l6.55-8.4c.62-.9 2.18-1.5 3.43-1.5H168.6c1.2 0 1.5.9.9 1.8l-5.3 8.1c-.6 1-2.2 1.9-3.1 1.9l-112.8-.3zM1.246 229.1c-1.246 0-1.558-.7-.934-1.6l6.543-8.4c.624-.9 2.182-1.6 3.425-1.6H152.4c1.2 0 1.8 1 1.5 1.9l-2.5 7.5c-.3 1.2-1.5 1.9-2.8 1.9l-147.354.3zm74.474 26.8c-.62.9-.31 1.8.93 1.8l67.95.3c.9 0 2.2-.9 2.2-2.1l.6-7.5c0-1.3-.6-2.2-1.9-2.2H83.2c-1.25 0-2.49.9-3.12 1.9l-4.36 7.8zm501.48-18c-.2-2.6-.3-4.8-.7-7-5.6-30.8-34-48.3-63.6-41.4-29 6.5-47.7 24.9-54.5 54.2-5.6 24.3 6.2 48.9 28.6 58.9 17.2 7.5 34.3 6.6 50.8-1.9 24.6-13.6 38-32.7 39.6-59.5-.1-1.2-.1-2.3-.2-3.3z" />
    </svg>
  );
}

function IconPython(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
    </svg>
  );
}

function IconTypescript(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  );
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}

function PiIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </svg>
  );
}

function BeanIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
