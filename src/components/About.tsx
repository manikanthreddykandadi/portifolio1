function About() {
    return (
        <div className="pt-4 w-full max-w-[1100px] mx-auto px-6">
            <div className="pt-4 w-full max-w-[1100px] mx-auto px-6  border-b-1 pb-20 ">
                <h1 className=" flex text-5xl font-bold  justify-center items-center">
                    About Me
                </h1>
                <div className="flex justify-center items-center text-xl pt-4">
                    Get to know me better
                </div>
                <p className="font-sm pt-4">
                    <div> I'm a passionate full-stack developer with over 1 year of experience crafting elegant solutions to complex problems. My journey in tech began with a fascination for how things work, which led me to pursue Computer Science Engineering and eventually specialize in web development and software engineering.</div>

                    <div><span className="font-bold">My Approach:</span> I believe in writing clean, maintainable code that scales. I'm a strong advocate for modern development practices and continuous learning. My experience spans from corporate solutions to personal projects, giving me a unique perspective on different development methodologies and best practices.</div>

                    <div><span className="font-bold"> What I Do:</span> I specialize in building full-stack applications using React, Next.js, and Node.js. Recently, I've been focusing on integrating AI capabilities into web applications, leveraging technologies like OpenAI and LangChain. I'm also experienced in real-time systems using WebSockets and data visualization with D3.js.</div>

                    When I'm not coding, you can find me contributing to open-source projects, solving DSA problems on GeeksForGeeks and LeetCode, or mentoring fellow developers. I'm always excited to learn new technologies and share knowledge with the community.
                </p>

            </div>
            <div className="pt-20 flex gap-40 pb-5">
                <div>
                    <div className="text-3xl font-bold pb-2">10+</div>
                    <div className="text-sm">Projects Completed</div>
                </div>
                <div>
                    <div className="text-3xl font-bold pb-2">270+</div>
                    <div className="text-sm">DSA Problems Solved</div>
                </div>
                <div>
                    <div className="text-3xl font-bold pb-2">1+</div>
                    <div className="text-sm">Years Experience</div>
                </div>
                <div>
                    <div className="text-3xl font-bold pb-2">15+</div>
                    <div className="text-sm">Technologies Mastered</div>
                </div>
            </div>
        </div>


    );
}

export default About;