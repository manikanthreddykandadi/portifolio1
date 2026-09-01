import {
  Home,
  UserRound,
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  Wrench,
  X,
} from "lucide-react";

function Header() {
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

  return (
    <header className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="
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

        {/* Close button */}
        <button
          type="button"
          aria-label="Close navigation"
          className="
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
          <X size={25} strokeWidth={1.8} />
        </button>
      </nav>
    </header>
  );
}

export default Header;  