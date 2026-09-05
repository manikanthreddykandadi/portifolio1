
const achievements = [
  {
    type: "Milestone",
    date: "February 2024",
    title: "LeetCode Problem Solver",
    organization: "LeetCode",
    description:
      "Solved 70+ problems on LeetCode, demonstrating strong algorithmic thinking and problem-solving abilities across various difficulty levels.",
    typeStyle:
      "bg-pink-50 text-pink-500 dark:bg-pink-500/10 dark:text-pink-400",

    // Put your real LeetCode profile URL here
    link: "https://leetcode.com/",
  },

  {
    type: "Recognition",
    date: "January 2024",
    title: "Rank 8 in GeeksForGeeks Practice",
    organization: "GeeksForGeeks",
    description:
      "Achieved Rank 8 in GeeksForGeeks Practice in my institution, solving over 200 DSA problems and demonstrating strong problem-solving skills.",

    typeStyle:
      "bg-cyan-50 text-cyan-500 dark:bg-cyan-500/10 dark:text-cyan-400",

    // Put your real GeeksForGeeks profile URL here
    link: "https://www.geeksforgeeks.org/",
  },

  {
    type: "Recognition",
    date: "December 2023",
    title: "POTD Consistency Award",
    organization: "GeeksForGeeks",
    description:
      "Received Goodies for doing Problem of the Day (POTD) consistently over 120 days, demonstrating dedication to continuous learning and problem-solving.",

    typeStyle:
      "bg-cyan-50 text-cyan-500 dark:bg-cyan-500/10 dark:text-cyan-400",

    link: "https://www.geeksforgeeks.org/",
  },

  {
    type: "Achievement",
    date: "September 2023",
    title: "GDSC Web Development Bootcamp Organizer",
    organization: "Google Developer Student Club",
    description:
      "Led a vibrant 5-day college boot camp initiated by students, dedicated to educating and guiding fellow peers and juniors through immersive education and mentorship.",

    typeStyle:
      "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",

    link: "https://developers.google.com/community/gdsc",
  },

  {
    type: "Open Source",
    date: "October 2022",
    title: "Hacktoberfest 2022 Contributor",
    organization: "DigitalOcean",
    description:
      "Successfully contributed to Hacktoberfest 2022, earning badges and contributing to open-source projects while learning new technologies.",

    typeStyle:
      "bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400",

    link: "https://hacktoberfest.com/",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="
        w-full
        bg-white
        py-12
        text-gray-900
        transition-colors
        duration-500
        sm:py-16
        dark:bg-slate-950
        dark:text-white
      "
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2
            className="
              text-3xl
              font-bold
              text-gray-950
              transition-colors
              duration-300
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Achievements &amp; Awards
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-gray-500
              transition-colors
              duration-300
              sm:text-xl
              dark:text-gray-400
            "
          >
            Milestones and recognitions
          </p>
        </div>

        {/* Featured Achievements */}
        <div className="mb-5 flex items-center gap-3">
          <span className="text-3xl text-yellow-500">
            ★
          </span>

          <h3
            className="
              text-xl
              font-bold
              text-gray-950
              transition-colors
              duration-300
              sm:text-2xl
              dark:text-white
            "
          >
            Featured Achievements
          </h3>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border-2
                border-gray-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:p-8
                dark:border-slate-800
                dark:bg-slate-900
                dark:hover:border-slate-700
                dark:hover:bg-slate-800
              "
            >

              {/* Type + Date */}
              <div className="mb-6 flex flex-wrap items-center gap-3">

                <span
                  className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-medium
                    ${achievement.typeStyle}
                  `}
                >
                  {achievement.type}
                </span>

                <span
                  className="
                    text-sm
                    text-gray-500
                    transition-colors
                    duration-300
                    dark:text-gray-400
                  "
                >
                  {achievement.date}
                </span>

              </div>

              {/* Title */}
              <h4
                className="
                  text-xl
                  font-medium
                  leading-tight
                  text-gray-950
                  transition-colors
                  duration-300
                  sm:text-[22px]
                  dark:text-white
                "
              >
                {achievement.title}
              </h4>

              {/* Organization */}
              <p
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-gray-950
                  transition-colors
                  duration-300
                  dark:text-gray-100
                "
              >
                {achievement.organization}
              </p>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-base
                  leading-7
                  text-gray-500
                  transition-colors
                  duration-300
                  sm:text-sm
                  sm:leading-8
                  dark:text-gray-400
                "
              >
                {achievement.description}
              </p>

              {/* ================= LEARN MORE ================= */}

              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-gray-950
                  transition-all
                  duration-200
                  hover:gap-3
                  hover:underline
                  dark:text-white
                "
              >
                Learn More

                <span
                  className="
                    text-sm
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  ↗
                </span>
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Achievements;

