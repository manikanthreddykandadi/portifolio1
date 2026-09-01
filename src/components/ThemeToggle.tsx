import { useState } from "react";

type Theme = "light" | "dark" | "system";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [open, setOpen] = useState(false);

  const changeTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);

    if (selectedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (selectedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    setOpen(false);
  };

  return (
    <div className="fixed bottom-3 right-10 z-50">

      {/* Menu */}
      {open && (
        <div className="absolute bottom-16 right-0 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-xl dark:border-gray-700 dark:bg-gray-900">

          {/* Light */}
          <button
            onClick={() => changeTheme("light")}
            className="w-full rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Light
          </button>

          {/* Dark */}
          <button
            onClick={() => changeTheme("dark")}
            className="w-full rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            Dark
          </button>

          {/* System */}
          <button
            onClick={() => changeTheme("system")}
            className="w-full rounded-lg px-4 py-3 text-left text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            System
          </button>

        </div>
      )}

      {/* Main Theme Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-gray-100
          bg-white
          text-xl
          font-bold
          text-gray-500
          shadow-lg
          transition
          duration-200
          hover:scale-105
          hover:bg-white
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-gray-300
          dark:hover:bg-gray-800
        "
      >
        ☼
      </button>

    </div>
  );
}

export default ThemeToggle;