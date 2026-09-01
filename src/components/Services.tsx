
function Services() {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building clean, responsive and interactive interfaces with modern frontend technologies.",
      features: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
      icon: "</>",
    },
    {
      number: "02",
      title: "Full-Stack Development",
      description:
        "Creating complete web applications with frontend interfaces, backend APIs and database integration.",
      features: ["Node.js", "Express.js", "REST APIs", "MongoDB / MySQL"],
      icon: "⌘",
    },
    {
      number: "03",
      title: "AI & Machine Learning",
      description:
        "Exploring practical AI and machine learning solutions for real-world applications.",
      features: ["Python", "CNN", "Computer Vision", "ML Projects"],
      icon: "✦",
    },
    {
      number: "04",
      title: "Responsive UI",
      description:
        "Designing interfaces that work smoothly across desktop, tablet and mobile devices.",
      features: ["Mobile First", "Modern UI", "Accessibility", "Cross Device"],
      icon: "◈",
    },
    {
      number: "05",
      title: "API & Database",
      description:
        "Connecting applications with APIs and databases to create functional data-driven experiences.",
      features: ["REST API", "API Integration", "MongoDB", "MySQL"],
      icon: "⌁",
    },
  ];

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
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
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-72
          w-72
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
          -right-40
          bottom-10
          h-72
          w-72
          rounded-full
          bg-gray-100
          blur-3xl
          dark:bg-slate-900
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              border-gray-200 
              px-3
              py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-500
              dark:border-slate-800
              dark:bg-slate-900
              dark:text-slate-400
            "
          >
          </div>

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-gray-950
              sm:text-5xl
              dark:text-white
            "
          >
            Services
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              sm:text-base
              dark:text-slate-400
            "
          >
            Practical development skills I use to turn ideas into
            clean, functional and responsive digital experiences.
          </p>
        </div>

        {/* =========================
            SERVICE GRID
        ========================== */}

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <article
              key={service.number}
              className={`
                group
                relative
                flex
                min-h-[390px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-6
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-gray-300
                hover:bg-white
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
                dark:hover:bg-slate-900
                dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                ${
                  index === 4
                    ? "sm:col-span-2 lg:col-span-1"
                    : ""
                }
              `}
            >
              {/* Top animated line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[2px]
                  w-0
                  bg-gray-900
                  transition-all
                  duration-500
                  group-hover:w-full
                  dark:bg-white
                "
              />

              {/* =========================
                  CARD TOP
              ========================== */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.2em]
                    text-gray-400
                    dark:text-slate-600
                  "
                >
                  {service.number}
                </span>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-gray-900
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    dark:bg-white
                    dark:text-gray-900
                  "
                >
                  {service.icon}
                </div>
              </div>

              {/* =========================
                  TITLE
              ========================== */}

              <h3
                className="
                  mt-7
                  text-xl
                  font-bold
                  tracking-tight
                  text-gray-950
                  dark:text-white
                "
              >
                {service.title}
              </h3>

              {/* =========================
                  DESCRIPTION
              ========================== */}

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-500
                  dark:text-slate-400
                "
              >
                {service.description}
              </p>

              {/* =========================
                  FEATURES
              ========================== */}

              <div className="mt-6">

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-gray-400
                    dark:text-slate-500
                  "
                >
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="
                        rounded-full
                        border
                        border-gray-200
                        bg-white
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-gray-600
                        transition-colors
                        group-hover:border-gray-300
                        dark:border-slate-800
                        dark:bg-slate-950
                        dark:text-slate-400
                      "
                    >
                      {feature}
                    </span>
                  ))}

                </div>
              </div>

              {/* =========================
                  BOTTOM
              ========================== */}

              <div
                className="
                  mt-auto
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-200
                  pt-5
                  dark:border-slate-800
                "
              >
                <span
                  className="
                    text-xs
                    font-medium
                    text-gray-400
                    dark:text-slate-500
                  "
                >
                  Explore my skills
                </span>

                <span
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
                    text-gray-700
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-gray-900
                    group-hover:text-white
                    dark:border-slate-700
                    dark:text-slate-300
                    dark:group-hover:bg-white
                    dark:group-hover:text-gray-900
                  "
                >
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <div className="mt-10 text-center">

          <p
            className="
              text-xs
              text-gray-400
              dark:text-slate-500
            "
          >
            Always learning. Always building. Always improving.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Services;