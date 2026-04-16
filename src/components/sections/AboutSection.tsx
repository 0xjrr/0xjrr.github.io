export default function AboutSection() {
  return (
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
  );
}
