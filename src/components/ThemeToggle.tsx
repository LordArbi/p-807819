
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-200",
        theme === "dark" 
          ? "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-400" />
      ) : (
        <Moon size={18} className="text-primary/80" />
      )}
    </button>
  );
};

export default ThemeToggle;
