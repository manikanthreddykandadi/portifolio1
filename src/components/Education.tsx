function Education() {
    return (
        <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-15 ">



            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 lg:mb-16">

                <h2 className="text-4xl font-bold text-black sm:text-4xl lg:text-5xl">
                    Education
                </h2>

                <p className="mt-3 text-base text-gray-500 sm:text-lg lg:text-xl">
                    My academic background
                </p>

            </div>




            <div className=" max-w-2xl pl-30 ">

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm h-170">


                    <div className="h-1 bg-gray-800"></div>



                    <div className="p-5 sm:p-7 lg:p-8">



                        <h3 className="text-xl font-bold text-gray-900 sm:text-xl">
                            Bachelor of Technology
                        </h3>



                        <h4 className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
                            Brilliant Group Of Techinical Institutions
                        </h4>



                        <p className="mt-2 text-sm text-gray-500 sm:text-base">
                            Computer Science Engineering (Internet of Things)
                        </p>




                        <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">


                            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 sm:px-4">

                                <span className="text-base">
                                    📅
                                </span>

                                <span>
                                    Sep 2021 - jul 2025
                                </span>

                            </div>


                            {/* GPA */}
                            <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-800 sm:px-4">

                                <span className="text-base">
                                    🏅
                                </span>

                                <span>
                                    GPA: 6.5/10
                                </span>

                            </div>

                        </div>




                        <p className="mt-6 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">

                            Comprehensive computer science education with specialization
                            in Internet of Things (IoT). Focused on software engineering,
                            embedded systems, and modern web technologies.

                        </p>




                        <div className="mt-6 rounded-xl bg-gray-50 p-4 sm:p-5 ">




                            <div className="flex items-center gap-2 h-1">

                                <span className="text-lg">
                                    🏅
                                </span>

                                <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
                                    Achievements & Honors
                                </h4>

                            </div>




                            <ul className="mt-4 space-y-3 text-sm text-gray-500 sm:text-base">

                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        CGPA: 6.5/10
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Active member of GDSC (Google Developer Student Club)
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Organized and tutored Web Development Bootcamp
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Contributed to Hacktoberfest 2022
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Solved 200+ DSA problems on GeeksForGeeks
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Rank 8 in GeeksForGeeks Practice in Institution
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Solved 70+ problems on LeetCode
                                    </span>
                                </li>


                                <li className="flex gap-3">
                                    <span className="text-xs text-gray-700">
                                        ▸
                                    </span>

                                    <span>
                                        Received Goodies for POTD consistency over 120 days
                                    </span>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;