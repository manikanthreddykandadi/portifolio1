const achievements = [
  {
    type: "Milestone",
    date: "February 2024",
    title: "LeetCode Problem Solver",
    organization: "LeetCode",
    description:
      "Solved 70+ problems on LeetCode, demonstrating strong algorithmic thinking and problem-solving abilities across various difficulty levels.",
    typeStyle: "bg-pink-50 text-pink-500",
  },
  {
    type: "Recognition",
    date: "January 2024",
    title: "Rank 8 in GeeksForGeeks Practice",
    organization: "GeeksForGeeks",
    description:
      "Achieved Rank 8 in GeeksForGeeks Practice in my institution, solving over 200 DSA problems and demonstrating strong problem-solving skills.",
    typeStyle: "bg-cyan-50 text-cyan-500",
  },
  {
    type: "Recognition",
    date: "December 2023",
    title: "POTD Consistency Award",
    organization: "GeeksForGeeks",
    description:
      "Received Goodies for doing Problem of the Day (POTD) consistently over 120 days, demonstrating dedication to continuous learning and problem-solving.",
    typeStyle: "bg-cyan-50 text-cyan-500",
  },
  {
    type: "Achievement",
    date: "September 2023",
    title: "GDSC Web Development Bootcamp Organizer",
    organization: "Google Developer Student Club",
    description:
      "Led a vibrant 5-day college boot camp initiated by students, dedicated to educating and guiding fellow peers and juniors through immersive education and mentorship.",
    typeStyle: "bg-gray-100 text-gray-600",
  },
  {
    type: "Open Source",
    date: "October 2022",
    title: "Hacktoberfest 2022 Contributor",
    organization: "DigitalOcean",
    description:
      "Successfully contributed to Hacktoberfest 2022, earning badges and contributing to open-source projects while learning new technologies.",
    typeStyle: "bg-orange-50 text-orange-500",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full bg-white py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6">

        
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
            Achievements &amp; Awards
          </h2>

          <p className="mt-4 text-lg text-gray-500 sm:text-xl">
            Milestones and recognitions
          </p>
        </div>

        
        <div className="mb-8 flex items-center gap-3">
          <span className="text-3xl text-yellow-500">
            ★
          </span>

          <h3 className="text-2xl font-bold text-black sm:text-3xl">
            Featured Achievements
          </h3>
        </div>

        
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
              "
            >

              
              <div className="mb-6 flex flex-wrap items-center gap-3">

                <span
                  className={`
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

                <span className="text-base text-gray-500">
                  {achievement.date}
                </span>

              </div>

              
              <h4
                className="
                  text-2xl
                  font-medium
                  leading-tight
                  text-black
                  sm:text-[26px]
                "
              >
                {achievement.title}
              </h4>

          
              <p
                className="
                  mt-4
                  text-lg
                  font-semibold
                  text-black
                "
              >
                {achievement.organization}
              </p>

              
              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-gray-500
                  sm:text-lg
                  sm:leading-8
                "
              >
                {achievement.description}
              </p>

            
              <button
                type="button"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-base
                  font-medium
                  text-black
                  transition
                  hover:underline
                "
              >
                Learn More

                <span className="text-lg">
                  ↗
                </span>
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Achievements;