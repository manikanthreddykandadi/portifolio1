const achievements = [
  {
    type: "Recognition",
    typeStyle:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    title: "Hackathon Mentor of the Year",
    organization: "Major League Hacking",
    date: "December 2023",
    description:
      "Recognized for mentoring 50+ teams at hackathons throughout the year, helping developers bring their ideas to life.",

    // Add your real achievement URL here
    link: "https://mlh.io/",
  },

  {
    type: "Milestone",
    typeStyle:
      "bg-pink-100 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400",
    title: "10K GitHub Stars Milestone",
    organization: "GitHub Community",
    date: "September 2023",
    description:
      "One of my open-source projects reached 10,000 stars on GitHub, used by developers worldwide in production applications.",

    // Add your GitHub project URL here
    link: "https://github.com/",
  },

  {
    type: "Recognition",
    typeStyle:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    title: "DEV Community Top Author",
    organization: "DEV.to",
    date: "July 2023",
    description:
      "Ranked in top 100 authors on DEV Community with articles reaching 500K+ views and helping thousands of developers.",

    // Add your DEV.to profile URL here
    link: "https://dev.to/",
  },

  {
    type: "Speaking",
    typeStyle:
      "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400",
    title: "Google I/O Extended Speaker",
    organization: "Google Developer Groups",
    date: "May 2023",
    description:
      "Selected as a speaker at Google I/O Extended event presenting on 'Modern Web Development with Next.js and AI'.",

    link: "https://developers.google.com/community/gdg",
  },

  {
    type: "Recognition",
    typeStyle:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400",
    title: "AWS Community Builder",
    organization: "Amazon Web Services",
    date: "March 2023",
    description:
      "Selected to join the AWS Community Builders program recognizing technical content creators and community leaders.",

    link: "https://builder.aws.com/",
  },
];

function AllAchievements() {
  return (
    <section
      className="
        w-full
        bg-white
        py-12
        transition-colors
        duration-500
        sm:py-16
        dark:bg-slate-950
      "
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6">

        {/* ================= HEADING ================= */}

        <h2
          className="
            mb-7
            text-3xl
            font-bold
            text-gray-950
            transition-colors
            duration-300
            sm:text-4xl
            dark:text-white
          "
        >
          All Achievements
        </h2>

        {/* ================= ACHIEVEMENT CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="
                flex
                min-h-[300px]
                flex-col
                rounded-xl
                border
                border-gray-200
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
                dark:hover:bg-slate-800
              "
            >

              {/* ================= TYPE ================= */}

              <div className="mb-4">
                <span
                  className={`
                    inline-flex
                    rounded-full
                    px-3
                    py-1
                    text-sm
                    font-medium
                    ${achievement.typeStyle}
                  `}
                >
                  {achievement.type}
                </span>
              </div>

              {/* ================= TITLE ================= */}

              <h3
                className="
                  mb-3
                  text-xl
                  font-semibold
                  leading-snug
                  text-gray-950
                  transition-colors
                  duration-300
                  dark:text-white
                "
              >
                {achievement.title}
              </h3>

              {/* ================= ORGANIZATION ================= */}

              <p
                className="
                  mb-2
                  text-base
                  font-medium
                  text-gray-950
                  transition-colors
                  duration-300
                  dark:text-gray-100
                "
              >
                {achievement.organization}
              </p>

              {/* ================= DATE ================= */}

              <p
                className="
                  mb-4
                  text-sm
                  text-gray-500
                  transition-colors
                  duration-300
                  dark:text-gray-400
                "
              >
                {achievement.date}
              </p>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  text-sm
                  leading-5
                  text-gray-500
                  transition-colors
                  duration-300
                  dark:text-gray-400
                "
              >
                {achievement.description}
              </p>

              {/* ================= LEARN MORE ================= */}

              <div
                className="
                  mt-auto
                  border-t
                  border-gray-200
                  pt-5
                  dark:border-slate-700
                "
              >
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-gray-950
                    transition-all
                    duration-200
                    hover:gap-3
                    hover:text-gray-600
                    hover:underline
                    dark:text-white
                    dark:hover:text-gray-300
                  "
                >
                  Learn More

                  <span
                    className="
                      text-base
                      transition-transform
                      duration-200
                    "
                  >
                    ↗
                  </span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllAchievements;

