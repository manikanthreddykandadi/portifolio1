function Skills() {
  const skills = [
    {
      number: "01",
      title: "Frontend",
      description: "Building clean and responsive user interfaces.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      boxColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-100 dark:border-blue-900",
      numberColor: "text-blue-500 dark:text-blue-400",
      hoverColor: "hover:border-blue-300 dark:hover:border-blue-700",
    },
    {
      number: "02",
      title: "Backend",
      description: "Creating simple and reliable server-side applications.",
      technologies: ["Node.js", "Express.js", "REST API"],
      boxColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-100 dark:border-green-900",
      numberColor: "text-green-500 dark:text-green-400",
      hoverColor: "hover:border-green-300 dark:hover:border-green-700",
    },
    {
      number: "03",
      title: "Database",
      description: "Working with databases to store and manage data.",
      technologies: ["MySQL", "MongoDB"],
      boxColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-100 dark:border-purple-900",
      numberColor: "text-purple-500 dark:text-purple-400",
      hoverColor: "hover:border-purple-300 dark:hover:border-purple-700",
    },
    {
      number: "04",
      title: "Programming & Tools",
      description: "Using modern tools to build and manage projects.",
      technologies: ["Java", "Python", "Git", "GitHub", "VS Code"],
      boxColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-100 dark:border-orange-900",
      numberColor: "text-orange-500 dark:text-orange-400",
      hoverColor: "hover:border-orange-300 dark:hover:border-orange-700",
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        bg-white
        px-6
        py-24
        text-gray-900
        dark:bg-gray-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16">

          <h2
            className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              tracking-tight
              text-gray-900
              md:text-5xl
              dark:text-white
            "
          >
            Skills & Expertise
          </h2>

          <p
            className="
              mt-5
              flex
              items-center
              justify-center
              text-center
              text-base
              leading-7
              text-gray-500
              md:text-lg
              dark:text-gray-400
            "
          >
            Technologies and tools I use to turn ideas into clean,
            functional, and responsive applications.
          </p>

        </div>


        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.number}
              className={`
                group
                rounded-2xl
                border
                ${skill.borderColor}
                ${skill.boxColor}
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                ${skill.hoverColor}
                hover:shadow-xl
              `}
            >

              {/* Number */}
              <div className="mb-6 flex items-center justify-between">

                <span
                  className={`
                    text-sm
                    font-semibold
                    ${skill.numberColor}
                  `}
                >
                  {skill.number}
                </span>

                <span
                  className="
                    h-px
                    w-16
                    bg-gray-300
                    transition-all
                    duration-300
                    group-hover:w-24
                    group-hover:bg-gray-500
                    dark:bg-gray-700
                    dark:group-hover:bg-gray-400
                  "
                />

              </div>


              {/* Title */}
              <h3
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {skill.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-600
                  dark:text-gray-400
                "
              >
                {skill.description}
              </p>


              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">

                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/80
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-md
                      dark:border-gray-700
                      dark:bg-gray-900
                      dark:text-gray-300
                    "
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;