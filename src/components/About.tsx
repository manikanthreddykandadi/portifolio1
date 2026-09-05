function About() {
    return (
        <section
            id="about"
            className="
                w-full
                bg-white
                px-6
                py-20
                text-gray-900
                dark:bg-gray-950
                dark:text-white
                lg:px-12
            "
        >
            <div className="mx-auto max-w-6xl">

                {/* ================= HEADER ================= */}
                <div className="text-center">
                    <h2
                        className="
                            text-4xl
                            font-bold
                            sm:text-5xl
                        "
                    >
                        About Me
                    </h2>

                    <p
                        className="
                            mt-4
                            text-lg
                            text-gray-500
                            dark:text-gray-400
                        "
                    >
                        Get to know me better
                    </p>
                </div>

                {/* ================= ABOUT CONTENT ================= */}
                <div
                    className="
                        mx-auto
                        mt-14
                        max-w-5xl
                        space-y-6
                        text-lg
                        leading-8
                        text-gray-600
                        dark:text-gray-300
                    "
                >
                    <p>
                        I'm a passionate Computer Science & Engineering
                        graduate with a strong interest in web development.
                        I enjoy turning ideas into functional, user-friendly
                        web applications and continuously improving my
                        programming skills.
                    </p>

                    <p>
                        <strong className="text-gray-900 dark:text-white">
                            My Approach:
                        </strong>{" "}
                        I believe in writing clean, understandable code and
                        learning through hands-on projects. Building real
                        projects has helped me strengthen my understanding of
                        frontend development, responsive design, and modern
                        web technologies.
                    </p>

                    <p>
                        <strong className="text-gray-900 dark:text-white">
                            What I Do:
                        </strong>{" "}
                        I enjoy building web applications using technologies
                        such as React, JavaScript, TypeScript, Tailwind CSS,
                        and Node.js. I have completed projects including an
                        E-commerce website and my personal Portfolio website.
                    </p>

                    <p>
                        <strong className="text-gray-900 dark:text-white">
                            Currently:
                        </strong>{" "}
                        I'm looking for an opportunity as a fresher where I
                        can apply my skills, learn from experienced developers,
                        and grow as a software developer.
                    </p>
                </div>

                {/* ================= DIVIDER ================= */}
                <div
                    className="
                        my-14
                        h-px
                        w-full
                        bg-gray-200
                        dark:bg-gray-800
                    "
                />

                {/* ================= STATISTICS ================= */}
                <div
                    className="
                        grid
                        grid-cols-2
                        gap-8
                        text-center
                        md:grid-cols-4
                    "
                >

                    {/* STAT 1 */}
                    <div>
                        <h3
                            className="
                                text-4xl
                                font-bold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            3
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Projects Completed
                        </p>
                    </div>

                    {/* STAT 2 */}
                    <div>
                        <h3
                            className="
                                text-4xl
                                font-bold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            5+
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Technologies Used
                        </p>
                    </div>

                    {/* STAT 3 */}
                    <div>
                        <h3
                            className="
                                text-4xl
                                font-bold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            1
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            E-commerce Website
                        </p>
                    </div>

                    {/* STAT 4 */}
                    <div>
                        <h3
                            className="
                                text-4xl
                                font-bold
                                text-gray-900
                                dark:text-white
                            "
                        >
                            2
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Portfolio Website
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;