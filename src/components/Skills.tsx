function Skills() {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-6 py-16 pt-30 ">

            
            <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-black">
                    Skills & Expertise
                </h2>

                <p className="text-xl mt-4 text-gray-700">
                    A comprehensive overview of my technical proficiencies and tools I work with daily
                </p>
            </div>


            
            <div className="grid grid-cols-2 gap-8 ">


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Ai Ml
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                            3
                        </span>
                    </div>

                    <div className="p-8 space-y-6 h-1 ">

                        <SkillBar
                            name="LangChain"
                            percentage={75}
                            color="bg-teal-900"
                        />

                        <SkillBar
                            name="OpenAI API"
                            percentage={96}
                            color="bg-purple-700"
                        />

                        <SkillBar
                            name="TensorFlow"
                            percentage={82}
                            color="bg-orange-500"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Backend
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            6
                        </span>
                    </div>

                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="GraphQL"
                            percentage={83}
                            color="bg-pink-600"
                        />

                        <SkillBar
                            name="JWT"
                            percentage={85}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Node.js"
                            percentage={94}
                            color="bg-green-600"
                        />

                        <SkillBar
                            name="Python"
                            percentage={87}
                            color="bg-blue-600"
                        />

                        <SkillBar
                            name="REST API Design"
                            percentage={91}
                            color="bg-black"
                        />

                        <SkillBar
                            name="WebSockets"
                            percentage={78}
                            color="bg-black"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Cloud
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            4
                        </span>
                    </div>

                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="AWS"
                            percentage={88}
                            color="bg-orange-500"
                        />

                        <SkillBar
                            name="Firebase"
                            percentage={82}
                            color="bg-yellow-400"
                        />

                        <SkillBar
                            name="Google Cloud Platform"
                            percentage={73}
                            color="bg-blue-500"
                        />

                        <SkillBar
                            name="Vercel"
                            percentage={80}
                            color="bg-black"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Database
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            4
                        </span>
                    </div>

                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="Elasticsearch"
                            percentage={68}
                            color="bg-cyan-800"
                        />

                        <SkillBar
                            name="MongoDB"
                            percentage={85}
                            color="bg-green-600"
                        />

                        <SkillBar
                            name="PostgreSQL"
                            percentage={89}
                            color="bg-blue-700"
                        />

                        <SkillBar
                            name="Redis"
                            percentage={80}
                            color="bg-red-600"
                        />

                    </div>
                </div>
            
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Design
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            2
                        </span>
                    </div>

                    <div className="p-8 space-y-6">

                        <SkillBar
                            name="Figma"
                            percentage={70}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Responsive Design"
                            percentage={93}
                            color="bg-black"
                        />

                    </div>
                </div>


        
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Devops
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            5
                        </span>
                    </div>

                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="Docker"
                            percentage={90}
                            color="bg-blue-500"
                        />

                        <SkillBar
                            name="GitHub Actions"
                            percentage={85}
                            color="bg-blue-500"
                        />

                        <SkillBar
                            name="Jenkins"
                            percentage={78}
                            color="bg-red-600"
                        />

                        <SkillBar
                            name="Kubernetes"
                            percentage={72}
                            color="bg-blue-600"
                        />

                        <SkillBar
                            name="Terraform"
                            percentage={70}
                            color="bg-purple-600"
                        />

                    </div>
                </div>
                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    
                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Frontend
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            14
                        </span>
                    </div>

                    
                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="Web Accessibility"
                            percentage={85}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Angular"
                            percentage={70}
                            color="bg-red-600"
                        />

                        <SkillBar
                            name="CSS3"
                            percentage={90}
                            color="bg-blue-600"
                        />

                        <SkillBar
                            name="D3.js"
                            percentage={75}
                            color="bg-orange-400"
                        />

                        <SkillBar
                            name="Framer Motion"
                            percentage={75}
                            color="bg-blue-600"
                        />

                        <SkillBar
                            name="HTML5"
                            percentage={95}
                            color="bg-orange-600"
                        />

                        <SkillBar
                            name="JavaScript"
                            percentage={92}
                            color="bg-yellow-400"
                        />

                        <SkillBar
                            name="Next.js"
                            percentage={92}
                            color="bg-black"
                        />

                        <SkillBar
                            name="React"
                            percentage={95}
                            color="bg-cyan-400"
                        />

                        <SkillBar
                            name="Redux Toolkit"
                            percentage={85}
                            color="bg-purple-600"
                        />

                        <SkillBar
                            name="SASS"
                            percentage={88}
                            color="bg-pink-400"
                        />

                        <SkillBar
                            name="Tailwind CSS"
                            percentage={95}
                            color="bg-cyan-500"
                        />

                        <SkillBar
                            name="TypeScript"
                            percentage={93}
                            color="bg-blue-600"
                        />

                        <SkillBar
                            name="Vue.js"
                            percentage={75}
                            color="bg-green-500"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    
                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Mobile
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            2
                        </span>
                    </div>

                    
                    <div className="p-8 space-y-16">

                        <SkillBar
                            name="Flutter"
                            percentage={65}
                            color="bg-blue-700"
                        />

                        <SkillBar
                            name="React Native"
                            percentage={80}
                            color="bg-cyan-400"
                        />

                    </div>
                </div>
        
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Programming
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            3
                        </span>
                    </div>

                    <div className="p-8 space-y-6">

                        <SkillBar
                            name="C"
                            percentage={75}
                            color="bg-slate-400"
                        />

                        <SkillBar
                            name="C++"
                            percentage={85}
                            color="bg-blue-700"
                        />

                        <SkillBar
                            name="Java"
                            percentage={80}
                            color="bg-orange-500"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Soft Skills
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            4
                        </span>
                    </div>

                    <div className="p-8 space-y-4">

                        <SkillBar
                            name="Agile/Scrum"
                            percentage={92}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Communication"
                            percentage={90}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Technical Leadership"
                            percentage={85}
                            color="bg-black"
                        />

                        <SkillBar
                            name="Problem Solving"
                            percentage={95}
                            color="bg-black"
                        />

                    </div>
                </div>


        
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm  hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Testing
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            2
                        </span>
                    </div>

                    <div className="p-8 space-y-6">

                        <SkillBar
                            name="Cypress"
                            percentage={80}
                            color="bg-slate-800"
                        />

                        <SkillBar
                            name="Jest"
                            percentage={85}
                            color="bg-red-600"
                        />

                    </div>
                </div>


                
                <div className="border border-gray-300 rounded-2xl overflow-hidden shadow-sm hover:border-black">

                    <div className="flex justify-between items-center px-5 py-2 border-b border-gray-200">
                        <h3 className="text-xl font-semibold">
                            Tools
                        </h3>

                        <span className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                            1
                        </span>
                    </div>

                    <div className="p-8 space-y-6">

                        <SkillBar
                            name="Git"
                            percentage={97}
                            color="bg-red-500"
                        />

                    </div>
                </div>





            </div>

        </section>
    );
}



type SkillBarProps = {
    name: string;
    percentage: number;
    color: string;
};

function SkillBar({
    name,
    percentage,
    color,
}: SkillBarProps) {
    return (
        <div className="flex items-center gap-4 h-3">

    
            <div className="w-28 text-right text-gray-600 text-sm">
                {name}
            </div>

    
            <div className="flex-1">

                <div className="h-5 bg-gray-100 rounded-md overflow-hidden">

                    <div
                        className={`${color} h-full rounded-md`}
                        style={{
                            width: `${percentage}%`,
                        }}
                    />

                </div>

            </div>

    
            <div className="w-10 text-xs font-medium">
                {percentage}%
            </div>

        </div>
    );
}

export default Skills;