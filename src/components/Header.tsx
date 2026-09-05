import { useState } from "react";
import {
    Home,
    UserRound,
    Code2,
    Lightbulb,
    Wrench,
    Menu,
    GraduationCap,
    Award,
    Trophy,
    Brain,
    Mail,
} from "lucide-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "Home",
            icon: Home,
            href: "#home",
        },
        {
            name: "About",
            icon: UserRound,
            href: "#about",
        },
        {
            name: "Skills",
            icon: Code2,
            href: "#skills",
        },
        {
            name: "Ideas",
            icon: Lightbulb,
            href: "#projects",
        },
        {
            name: "Services",
            icon: Wrench,
            href: "#services",
        },
    ];

    const extraItems = [
        {
            name: "Education",
            icon: GraduationCap,
            href: "#education",
        },
        {
            name: "Certifications",
            icon: Award,
            href: "#certifications",
        },
        {
            name: "Achievements",
            icon: Trophy,
            href: "#achievements",
        },
        {
            name: "Developer Insights",
            icon: Brain,
            href: "#developer-insights",
        },
        {
            name: "Contact",
            icon: Mail,
            href: "#contact",
        },
    ];

    return (
        <header className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2">

            <nav
                className="
                    relative
                    flex
                    items-center
                    gap-1
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white/90
                    px-3
                    py-2
                    shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    dark:border-gray-700
                    dark:bg-gray-900/90
                    dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                "
            >

                {/* Main Navigation */}
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-label={item.name}
                            className="
                                group
                                relative
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-full
                                text-gray-600
                                transition-all
                                duration-200
                                hover:bg-gray-100
                                hover:text-black
                                sm:h-14
                                sm:w-14
                                dark:text-gray-400
                                dark:hover:bg-gray-800
                                dark:hover:text-white
                            "
                        >
                            <Icon
                                size={22}
                                strokeWidth={1.8}
                                className="
                                    transition-transform
                                    duration-200
                                    group-hover:scale-110
                                "
                            />

                            {/* Tooltip */}
                            <span
                                className="
                                    pointer-events-none
                                    absolute
                                    -top-10
                                    hidden
                                    whitespace-nowrap
                                    rounded-lg
                                    bg-gray-900
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-white
                                    opacity-0
                                    transition-opacity
                                    group-hover:opacity-100
                                    sm:block
                                "
                            >
                                {item.name}
                            </span>
                        </a>
                    );
                })}

                {/* Three Lines Menu Button */}
                <button
                    type="button"
                    aria-label="Open more navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        group
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        text-gray-600
                        transition-all
                        duration-200
                        hover:bg-gray-100
                        hover:text-black
                        sm:h-14
                        sm:w-14
                        dark:text-gray-400
                        dark:hover:bg-gray-800
                        dark:hover:text-white
                    "
                >
                    <Menu
                        size={25}
                        strokeWidth={1.8}
                        className="
                            transition-transform
                            duration-200
                            group-hover:scale-110
                        "
                    />
                </button>

                {/* More Options Menu */}
                {menuOpen && (
                    <div
                        className="
                            absolute
                            bottom-20
                            right-0
                            w-56
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white/95
                            p-2
                            shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                            backdrop-blur-xl
                            dark:border-gray-700
                            dark:bg-gray-900/95
                        "
                    >
                        {extraItems.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-gray-700
                                        transition-all
                                        duration-200
                                        hover:bg-gray-100
                                        hover:text-black
                                        dark:text-gray-300
                                        dark:hover:bg-gray-800
                                        dark:hover:text-white
                                    "
                                >
                                    <Icon
                                        size={20}
                                        strokeWidth={1.8}
                                        className="
                                            transition-transform
                                            duration-200
                                            group-hover:scale-110
                                        "
                                    />

                                    <span className="text-sm font-medium">
                                        {item.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                )}

            </nav>
        </header>
    );
}

export default Header;