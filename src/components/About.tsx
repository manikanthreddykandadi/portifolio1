function About() {
    return (
        <section
            id="about"
            className="
                w-full
                bg-white
                text-gray-900
                dark:bg-gray-950
                dark:text-white
            "
        >
            <div className="pt-4 w-full max-w-[1000px] mx-auto px-6">

                {/* Main About Content */}
                <div
                    className="
                        pt-4
                        w-full
                        max-w-[1100px]
                        mx-auto
                        px-6
                        border-b
                        border-gray-200
                        pb-20
                        dark:border-gray-800
                    "
                >

                    {/* Heading */}
                    <h1
                        className="
                            flex
                            text-5xl
                            font-bold
                            justify-center
                            items-center
                            text-gray-900
                            dark:text-white
                        "
                    >
                        About Me
                    </h1>

                    {/* Subtitle */}
                    <div
                        className="
                            flex
                            justify-center
                            items-center
                            text-xl
                            pt-4
                            text-gray-500
                            dark:text-gray-400
                        "
                    >
                        Get to know me better
                    </div>

                    {/* About Text */}
                    <div
                        className="
                            text-lg
                            leading-8
                            pt-4
                            text-gray-500
                            dark:text-gray-400
                        "
                    >

                        <div className="pb-5">
                            I'm a passionate full-stack developer with over
                            1 year of experience crafting elegant solutions
                            to complex problems. My journey in tech began
                            with a fascination for how things work, which
                            led me to pursue Computer Science Engineering
                            and eventually specialize in web development
                            and software engineering.
                        </div>

                        <div className="pb-5">
                            <span
                                className="
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                "
                            >
                                My Approach:
                            </span>{" "}
                            I believe in writing clean, maintainable code
                            that scales. I'm a strong advocate for modern
                            development practices and continuous learning.
                            My experience spans from corporate solutions
                            to personal projects, giving me a unique
                            perspective on different development
                            methodologies and best practices.
                        </div>

                        <div className="pb-5">
                            <span
                                className="
                                    font-bold
                                    text-gray-900
                                    dark:text-white
                                "
                            >
                                What I Do:
                            </span>{" "}
                            I specialize in building full-stack applications
                            using React, Next.js, and Node.js. Recently, I've
                            been focusing on integrating AI capabilities into
                            web applications, leveraging technologies like
                            OpenAI and LangChain. I'm also experienced in
                            real-time systems using WebSockets and data
                            visualization with D3.js.
                        </div>

                        <div>
                            When I'm not coding, you can find me contributing
                            to open-source projects, solving DSA problems on
                            GeeksForGeeks and LeetCode, or mentoring fellow
                            developers. I'm always excited to learn new
                            technologies and share knowledge with the community.
                        </div>

                    </div>

                </div>


                {/* Statistics */}
                <div
                    className="
                        pt-20
                        flex
                        flex-wrap
                        justify-between
                        gap-10
                        pb-5
                    "
                >

                    {/* Projects */}
                    <div>
                        <div
                            className="
                                text-3xl
                                font-bold
                                pb-2
                                text-gray-900
                                dark:text-white
                            "
                        >
                            10+
                        </div>

                        <div
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Projects Completed
                        </div>
                    </div>


                    {/* DSA */}
                    <div>
                        <div
                            className="
                                text-3xl
                                font-bold
                                pb-2
                                text-gray-900
                                dark:text-white
                            "
                        >
                            270+
                        </div>

                        <div
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            DSA Problems Solved
                        </div>
                    </div>


                    {/* Experience */}
                    <div>
                        <div
                            className="
                                text-3xl
                                font-bold
                                pb-2
                                text-gray-900
                                dark:text-white
                            "
                        >
                            1+
                        </div>

                        <div
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Years Experience
                        </div>
                    </div>


                    {/* Technologies */}
                    <div>
                        <div
                            className="
                                text-3xl
                                font-bold
                                pb-2
                                text-gray-900
                                dark:text-white
                            "
                        >
                            15+
                        </div>

                        <div
                            className="
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Technologies Mastered
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;