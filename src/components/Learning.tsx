function Learning() {
  const insights = [
    {
      number: "01",
      category: "FRONTEND",
      title: "Building Modern React Applications",
      description:
        "Approaches I use to create reusable React components, maintain clean application structure and build responsive user interfaces.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "#skills",
    },
    {
      number: "02",
      category: "BACKEND",
      title: "Designing REST APIs with Node.js",
      description:
        "Practical approaches to creating backend APIs, handling requests and connecting frontend applications with server-side services.",
      technologies: ["Node.js", "Express.js", "REST API"],
      link: "#projects",
    },
    {
      number: "03",
      category: "DATABASE",
      title: "Working with Application Data",
      description:
        "Understanding how applications store, retrieve and manage data efficiently using both relational and NoSQL databases.",
      technologies: ["MongoDB", "MySQL"],
      link: "#projects",
    },
    {
      number: "04",
      category: "UI / UX",
      title: "Creating Responsive Interfaces",
      description:
        "Techniques I use to build interfaces that remain clean, accessible and consistent across different screen sizes.",
      technologies: ["HTML", "CSS", "Tailwind CSS"],
      link: "#skills",
    },
    {
      number: "05",
      category: "AI / ML",
      title: "Integrating AI into Applications",
      description:
        "Exploring practical ways to combine machine learning and application development to solve real-world problems.",
      technologies: ["Python", "CNN", "Machine Learning"],
      link: "#projects",
    },
  ];

  return (
    <section
      id="developer-insights"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        text-gray-900
        transition-colors
        duration-500
        dark:bg-slate-950
        dark:text-white
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-gray-100
          blur-3xl
          dark:bg-slate-900
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-72
          w-72
          rounded-full
          bg-gray-100
          blur-3xl
          dark:bg-slate-900
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14">

          <h2
            className="
              text-center
              text-4xl
              font-bold
              tracking-tight
              text-gray-950
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Building. Solving.
            <br />

            <span className="text-gray-400 dark:text-slate-600">
              Improving.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              dark:text-slate-400
            "
          >
            Technical insights, development experiences and ideas
            gathered while building modern web applications and
            exploring new technologies.
          </p>

        </div>


        {/* Featured Insight */}
        <div
          className="
            group
            relative
            mb-6
            overflow-hidden
            rounded-3xl
            border
            border-gray-800
            bg-gray-950
            text-white
            shadow-xl
            transition-all
            duration-500
            hover:shadow-2xl
            dark:border-slate-800
            dark:bg-black
          "
        >

          {/* Decorative circles */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              border
              border-gray-800
              transition-transform
              duration-700
              group-hover:scale-110
              dark:border-slate-800
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-44
              w-44
              rounded-full
              border
              border-gray-800
              dark:border-slate-800
            "
          />


          <div className="relative grid md:grid-cols-[1fr_280px]">

            {/* Main content */}
            <div className="p-7 sm:p-9 md:p-11">

              <div className="flex items-center gap-3">

                <span
                  className="
                    rounded-full
                    border
                    border-gray-700
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-gray-400
                  "
                >
                  Featured
                </span>

                <span className="text-xs text-gray-600">
                  01 / 05
                </span>

              </div>


              <h3
                className="
                  mt-7
                  max-w-3xl
                  text-2xl
                  font-bold
                  leading-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                From Idea to Application:
                <br />
                How I Approach Development
              </h3>


              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-base
                "
              >
                Good development starts with understanding the problem.
                I focus on breaking ideas into smaller components,
                designing clean interfaces, building reliable APIs and
                connecting everything into a functional application.
              </p>


              {/* Tags */}
              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Problem Solving",
                  "React",
                  "Node.js",
                  "Database",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      bg-gray-800
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-gray-300
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>


            {/* Right side */}
            <div
              className="
                flex
                flex-col
                justify-between
                border-t
                border-gray-800
                p-7
                md:border-l
                md:border-t-0
                md:p-9
                dark:border-slate-800
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                  "
                >
                  Development
                </p>

                <div
                  className="
                    mt-5
                    text-7xl
                    font-black
                    tracking-tighter
                    text-gray-800
                  "
                >
                  01
                </div>

              </div>


              <div
                className="
                  mt-8
                  text-xs
                  leading-5
                  text-gray-500
                "
              >
                Turning ideas into
                <br />
                working software.
              </div>

            </div>

          </div>
        </div>


        {/* Insight Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {insights.slice(1).map((insight) => (
            <article
              key={insight.number}
              className="
                group
                relative
                flex
                min-h-[340px]
                flex-col
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-gray-300
                hover:bg-white
                hover:shadow-xl

                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
                dark:hover:bg-slate-800
              "
            >

              {/* Number and category */}
              <div className="flex items-center justify-between">

                <span
                  className="
                    text-3xl
                    font-black
                    tracking-tighter
                    text-gray-200
                    dark:text-slate-700
                  "
                >
                  {insight.number}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-gray-200
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    tracking-[0.12em]
                    text-gray-500
                    dark:border-slate-700
                    dark:text-slate-400
                  "
                >
                  {insight.category}
                </span>

              </div>


              {/* Title */}
              <h3
                className="
                  mt-6
                  text-lg
                  font-bold
                  leading-6
                  text-gray-950
                  dark:text-white
                "
              >
                {insight.title}
              </h3>


              {/* Description */}
              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                  text-gray-500
                  dark:text-slate-400
                "
              >
                {insight.description}
              </p>


              {/* Technologies */}
              <div className="mt-auto pt-6">

                <div className="flex flex-wrap gap-1.5">

                  {insight.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        bg-gray-200
                        px-2
                        py-1
                        text-[10px]
                        font-medium
                        text-gray-600

                        dark:bg-slate-800
                        dark:text-slate-400
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>


                {/* Bottom */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-gray-200
                    pt-4
                    dark:border-slate-800
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-400
                      dark:text-slate-600
                    "
                  >
                    Insight
                  </span>


                  <a
                    href={insight.link}
                    aria-label={`Learn more about ${insight.title}`}
                    className="
                    flex
                    h-8
                    w-8
                   items-center
                   justify-center
                   rounded-full
                   border
                   border-gray-200
                   text-sm
                   text-gray-600
                   transition-all
                   duration-300
                   hover:translate-x-1
                   hover:bg-gray-900
                   hover:text-white
                   dark:border-slate-700
                   dark:text-slate-400
                   dark:hover:bg-white
                   dark:hover:text-gray-900
                   "
                  >
                    →
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Footer */}
        <div className="mt-12 flex justify-center">

          <div
            className="
              flex
              items-center
              gap-3
              text-xs
              text-gray-400
              dark:text-slate-600
            "
          >

            <span className="h-px w-8 bg-gray-200 dark:bg-slate-800" />

            <span>
              Always building something new
            </span>

            <span className="h-px w-8 bg-gray-200 dark:bg-slate-800" />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Learning;