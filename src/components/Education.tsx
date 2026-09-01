function Education() {
  return (
    <section
      id="education"
      className="
        bg-white
        py-5
        px-3
        text-gray-900
        dark:bg-gray-950
        dark:text-white
      "
    >

      {/* Section Heading */}
      <div className="mb-10">

        <h2
          className="
            mt-2
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            text-gray-900
            md:text-5xl
            dark:text-white
          "
        >
          Education
        </h2>

        <div
          className="
            flex
            items-center
            justify-center
            pt-3
            text-xl
            text-gray-500
            dark:text-gray-400
          "
        >
          My academic background
        </div>

      </div>


      {/* Education Card */}
      <div
        className="
          relative
          mx-40
          max-w-xl
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
          dark:border-gray-700
          dark:bg-gray-900
        "
      >

        {/* Top Line */}
        <div
          className="
            h-1.5
            bg-gray-900
            dark:bg-white
          "
        />


        <div className="p-5 md:p-5">

          {/* Degree */}
          <h3
            className="
              text-xl
              font-bold
              text-gray-900
              md:text-2xl
              dark:text-white
            "
          >
            Bachelor of Technology
          </h3>


          {/* Branch */}
          <h4
            className="
              mt-3
              text-xl
              font-medium
              text-gray-900
              dark:text-gray-100
            "
          >
            Computer Science & Engineering
          </h4>


          {/* College */}
          <p
            className="
              mt-2
              text-lg
              text-gray-500
              dark:text-gray-400
            "
          >
            Brilliant Group Of Technical Institutions
          </p>


          {/* Information Pills */}
          <div className="mt-7 flex flex-wrap gap-4">

            {/* Duration */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-gray-100
                px-2
                py-2
                dark:bg-gray-800
              "
            >
              <span className="text-sm">
                📅
              </span>

              <span
                className="
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Sep 2021 - Jul 2025
              </span>
            </div>


            {/* CGPA */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-gray-100
                px-2
                py-2
                dark:bg-gray-800
              "
            >
              <span className="text-sm">
                🎓
              </span>

              <span
                className="
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                "
              >
                CGPA: 6.5/10
              </span>
            </div>

          </div>


          {/* Description */}
          <p
            className="
              mt-5
              text-sm
              leading-6
              text-gray-500
              dark:text-gray-400
            "
          >
            Computer Science & Engineering graduate with a strong
            foundation in programming, software development, web
            technologies, and problem solving. Interested in building
            practical applications and learning modern technologies.
          </p>


          {/* Achievements */}
          <div
            className="
              mt-8
              rounded-2xl
              bg-gray-50
              p-6
              md:p-8
              dark:bg-gray-800
            "
          >

            <h4
              className="
                flex
                items-center
                gap-3
                text-xl
                font-semibold
                text-gray-900
                md:text-2xl
                dark:text-white
              "
            >
              <span>
                🏆
              </span>

              Achievements & Activities
            </h4>


            <ul
              className="
                mt-5
                space-y-4
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >

              <li className="flex gap-3">
                <span className="text-gray-900 dark:text-gray-300">
                  ▸
                </span>

                <span>
                  Completed Bachelor of Technology in Computer Science
                  & Engineering
                </span>
              </li>


              <li className="flex gap-3">
                <span className="text-gray-900 dark:text-gray-300">
                  ▸
                </span>

                <span>
                  Developed a CNN-based Plant Disease Detection project
                </span>
              </li>


              <li className="flex gap-3">
                <span className="text-gray-900 dark:text-gray-300">
                  ▸
                </span>

                <span>
                  Worked with Python, React, JavaScript and modern web
                  technologies
                </span>
              </li>


              <li className="flex gap-3">
                <span className="text-gray-900 dark:text-gray-300">
                  ▸
                </span>

                <span>
                  Built projects to improve practical software
                  development skills
                </span>
              </li>


              <li className="flex gap-3">
                <span className="text-gray-900 dark:text-gray-300">
                  ▸
                </span>

                <span>
                  Continuously learning full-stack development and new
                  technologies
                </span>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;