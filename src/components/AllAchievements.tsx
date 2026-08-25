function AllAchievements() {
    const achievements = [
        {
            type: "Recognition",
            typeStyle: "bg-cyan-100 text-cyan-600",
            title: "Hackathon Mentor of the Year",
            organization: "Major League Hacking",
            date: "December 2023",
            description:
                "Recognized for mentoring 50+ teams at hackathons throughout the year, helping developers bring their ideas to life.",
            link: false,
        },
        {
            type: "Milestone",
            typeStyle: "bg-pink-100 text-pink-600",
            title: "10K GitHub Stars Milestone",
            organization: "GitHub Community",
            date: "September 2023",
            description:
                "One of my open-source projects reached 10,000 stars on GitHub, used by developers worldwide in production applications.",
            link: true,
        },
        {
            type: "Recognition",
            typeStyle: "bg-cyan-100 text-cyan-600",
            title: "DEV Community Top Author",
            organization: "DEV.to",
            date: "July 2023",
            description:
                "Ranked in top 100 authors on DEV Community with articles reaching 500K+ views and helping thousands of developers.",
            link: true,
        },
        {
            type: "Speaking",
            typeStyle: "bg-green-100 text-green-600",
            title: "Google I/O Extended Speaker",
            organization: "Google Developer Groups",
            date: "May 2023",
            description:
                "Selected as a speaker at Google I/O Extended event presenting on 'Modern Web Development with Next.js and AI'.",
            link: true,
        },
        {
            type: "Recognition",
            typeStyle: "bg-cyan-100 text-cyan-600",
            title: "AWS Community Builder",
            organization: "Amazon Web Services",
            date: "March 2023",
            description:
                "Selected to join the AWS Community Builders program recognizing technical content creators and community leaders.",
            link: true,
        },
    ];

    return (
        <section className="w-full bg-white py-12 sm:py-16">
            <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-6">

            
                <h2 className="mb-7 text-3xl font-bold text-black sm:text-4xl">
                    All Achievements
                </h2>

                
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="flex min-h-[300px] flex-col rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            
                            <div className="mb-4">
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${achievement.typeStyle}`}
                                >
                                    {achievement.type}
                                </span>
                            </div>

                            
                            <h3 className="mb-3 text-xl font-semibold leading-snug text-black">
                                {achievement.title}
                            </h3>

                    
                            <p className="mb-2 text-base font-medium text-black">
                                {achievement.organization}
                            </p>

                    
                            <p className="mb-4 text-sm text-gray-500">
                                {achievement.date}
                            </p>

                            
                            <p className="text-sm leading-5 text-gray-500">
                                {achievement.description}
                            </p>

            
                            {achievement.link && (
                                <div className="mt-auto border-t border-gray-200 pt-5">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-gray-600"
                                    >
                                        Learn More
                                        <span className="text-base">↗</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default AllAchievements;