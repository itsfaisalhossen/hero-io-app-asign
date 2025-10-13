import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, SetDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "ligth");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => SetDarkMode((prev) => !prev)}
        className="px-2.5 py-2 rounded-md   cursor-pointer dark:bg-gray-800 text-gray-500 dark:text-white shadow"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};
export default DarkModeToggle;
