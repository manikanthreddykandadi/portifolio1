import img from "../assets/mani.png";

function Hero() {
    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                w-full
                overflow-hidden
                flex
                items-center
                bg-white
                dark:bg-gray-950
            "
        >
            {/* Grid Background */}
            <div
                className="
                    absolute
                    inset-0
                    z-0
                    opacity-70
                    dark:opacity-30
                    bg-[linear-gradient(to_right,#e5e7eb_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e5e7eb_1.5px,transparent_1.5px)]
                    bg-[size:65px_65px]
                    dark:bg-[linear-gradient(to_right,#374151_1.5px,transparent_1.5px),linear-gradient(to_bottom,#374151_1.5px,transparent_1.5px)]
                "
            />

            {/* Radial Background */}
            <div
                className="
                    absolute
                    inset-0
                    z-0
                    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.65)_45%,rgba(255,255,255,0.15)_100%)]
                    dark:bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.95)_0%,rgba(3,7,18,0.8)_50%,rgba(3,7,18,0.5)_100%)]
                "
            />

            {/* Main Content */}
            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-[1400px]
                    mx-auto
                    px-6
                    lg:px-12
                    py-20
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-between
                    gap-12
                "
            >

                {/* LEFT SIDE */}
                <div className="w-full lg:w-1/2">

                    {/* Name */}
                    <h1
                        className="
                            text-5xl
                            sm:text-5xl
                            lg:text-6xl
                            font-bold
                            leading-tight
                            text-gray-900
                            dark:text-white
                        "
                    >
                        Kandadi Manikanth Reddy
                    </h1>

                    {/* I Build */}
                    <div
                        className="
                            pt-6
                            pb-6
                            text-2xl
                            sm:text-3xl
                            text-gray-500
                            dark:text-gray-300
                        "
                    >
                        I build{" "}

                        <span
                            className="
                                inline-block
                                rounded-xl
                                border
                                border-gray-300
                                bg-gray-100
                                px-3
                                py-1
                                text-gray-900
                                font-medium
                                dark:border-gray-700
                                dark:bg-gray-800
                                dark:text-white
                            "
                        >
                            web applications
                        </span>
                    </div>

                    {/* Description */}
                    <p
                        className="
                            max-w-[650px]
                            text-lg
                            leading-8
                            text-gray-500
                            dark:text-gray-400
                        "
                    >
                        I'm a Computer Science & Engineering graduate and passionate web developer. I enjoy building responsive, user-friendly web applications and learning modern technologies. I have completed projects including an E-commerce website and my personal Portfolio website.

                        Status:
                    </p>

                    {/* Social Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="https://github.com/manikanthreddy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    inline-block
    rounded-xl
    border
    border-gray-300
    bg-white
    px-5
    py-2
    text-gray-800
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-gray-100
    hover:shadow-md
    dark:border-gray-700
    dark:bg-gray-900
    dark:text-gray-200
    dark:hover:bg-gray-800
  "
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/your-username/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        inline-block
        rounded-xl
        border
        border-gray-300
        bg-white
        px-5
        py-2
        text-gray-800
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-gray-100
        hover:shadow-md
        dark:border-gray-700
        dark:bg-gray-900
        dark:text-gray-200
        dark:hover:bg-gray-800
    "
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://twitter.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
        inline-block
        rounded-xl
        border
        border-gray-300
        bg-white
        px-5
        py-2
        text-gray-800
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-gray-100
        hover:shadow-md
        dark:border-gray-700
        dark:bg-gray-900
        dark:text-gray-200
        dark:hover:bg-gray-800
    "
                        >
                            Twitter
                        </a>



                        <a
                            href="manikanthreddy.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
    inline-block
    rounded-xl
    border
    border-gray-300
    bg-white
    px-5
    py-2
    text-gray-800
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-gray-100
    hover:shadow-md
    dark:border-gray-700
    dark:bg-gray-900
    dark:text-gray-200
    dark:hover:bg-gray-800
  "
                        >
                            Website
                        </a>
                    </div>

                    {/* Contact Information */}
                    <div
                        className="
                            mt-8
                            flex
                            flex-wrap
                            gap-x-6
                            gap-y-3
                            text-sm
                            text-gray-500
                            dark:text-gray-400
                        "
                    >

                        <div>
                            📧{" "}
                            <span>
                                manikanthreddykandadi583@gmail.com
                            </span>
                        </div>

                        <div>
                            📍 <span>Hyderabad, India</span>
                        </div>

                        <div>
                            ✅ <span>open</span>
                        </div>

                    </div>

                </div>


                {/* RIGHT SIDE - IMAGE */}
                <div
                    className="
                        relative
                        w-full
                        lg:w-1/2
                        flex
                        justify-center
                        lg:justify-end
                    "
                >

                    <div
                        className="
                            relative
                            w-full
                            max-w-[600px]
                            overflow-hidden
                            rounded-2xl
                            border-4
                            border-gray-300
                            bg-gray-100
                            shadow-sm
                            dark:border-gray-700
                            dark:bg-gray-900
                        "
                    >

                        {/* Profile Image */}
                        <img
                            src={img}
                            alt="Manikanth Reddy"
                            className="
                                w-full
                                h-[500px]
                                sm:h-[600px]
                                object-cover
                                object-center
                            "
                        />

                        {/* Online Badge */}
                        <div
                            className="
                                absolute
                                top-5
                                right-5
                                rounded-full
                                bg-black/80
                                px-2
                                py-1
                                text-xs
                                font-medium
                                text-white
                                backdrop-blur-sm
                            "
                        >
                            🟢 Online
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;