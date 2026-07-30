import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme.js";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-base-700 text-ink-300 transition hover:border-cyan-glow/40 hover:text-cyan-glow"
    >
      {theme === "dark" ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
    </button>
  );
}
