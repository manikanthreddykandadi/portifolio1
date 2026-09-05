type Project = {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    category: "web-app",
    title: "MyBlogs",
    description:
        "A blog website where users can create, publish, and manage blog posts with authentication.",
    technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "+1",
    ],
    liveLink: "#",
    githubLink: "https://github.com/manikanthreddy",
},

 {
    category: "web-app",
    title: "Portfolio Website",
    description:
        "Personal portfolio website showcasing my skills, projects, education, and achievements.",
    technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
    ],
    liveLink: "https://manikanthreddy.netlify.app",
    githubLink: "#",
},

  {
    category: "web-app",
    title: "PJR Real Estate",
    description:
      "Enhanced business website boosting sales by 30% and bolstering online presence",
    technologies: [
      "React",
      "CSS3",
      "JavaScript",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];


function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <div
      className={`
        flex
        h-full
        flex-col
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        dark:border-gray-700
        dark:bg-gray-900
        ${
          featured
            ? "shadow-[0_18px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
            : "shadow-none"
        }
      `}
    >

      {/* Category */}
      <div>
        <span
          className="
            inline-block
            rounded-full
            bg-gray-100
            px-2.5
            py-1
            text-xs
            font-medium
            text-gray-700
            dark:bg-gray-800
            dark:text-gray-300
          "
        >
          {project.category}
        </span>
      </div>


      {/* Project Title */}
      <h3
        className="
          mt-4
          text-xl
          font-semibold
          text-gray-900
          dark:text-white
        "
      >
        {project.title}
      </h3>


      {/* Description */}
      <p
        className="
          mt-3
          min-h-[48px]
          text-sm
          leading-5
          text-gray-500
          dark:text-gray-400
        "
      >
        {project.description}
      </p>


      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">

        {project.technologies.map((technology, index) => (
          <span
            key={index}
            className="
              rounded-full
              bg-gray-100
              px-2.5
              py-1
              text-xs
              font-medium
              text-gray-800
              dark:bg-gray-800
              dark:text-gray-300
            "
          >
            {technology}
          </span>
        ))}

      </div>


      {/* Buttons */}
      <div className="mt-6 flex gap-3">

        {/* Live Demo */}
        <a
          href={project.liveLink}
          className="
            flex-1
            rounded-xl
            bg-[#181818]
            px-4
            py-3
            text-center
            text-sm
            font-medium
            text-white
            transition
            hover:bg-black
            dark:bg-white
            dark:text-gray-900
            dark:hover:bg-gray-200
          "
        >
          Live Demo
        </a>


        {/* GitHub */}
        <a
          href={project.githubLink}
          className="
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-sm
            font-medium
            text-gray-800
            transition
            hover:bg-gray-50
            dark:border-gray-700
            dark:bg-gray-900
            dark:text-gray-200
            dark:hover:bg-gray-800
          "
        >
          GitHub
        </a>

      </div>

    </div>
  );
}


function Projects() {
  return (
    <section
      id="projects"
      className="
        w-full
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
        dark:bg-gray-950
      "
    >

      {/* SECTION HEADER */}
      <div className="mx-auto max-w-4xl text-center">

        <h2
          className="
            text-4xl
            font-bold
            tracking-tight
            text-black
            sm:text-4xl
            lg:text-5xl
            dark:text-white
          "
        >
          Featured Projects
        </h2>

        <p
          className="
            mt-4
            text-lg
            text-gray-500
            sm:text-xl
            dark:text-gray-400
          "
        >
          Some of my best work
        </p>

      </div>


      {/* PROJECT CARDS */}
      <div
        className="
          mx-auto
          mt-14
          grid
          max-w-[1200px]
          grid-cols-1
          gap-6
          sm:mt-16
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            featured={index === 1}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;