import Link from "next/link";
import { IconGithub, IconLinkedin, IconMail } from "@/components/icons/Icons";

export default function ContactSection() {
  return (
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
  );
}
