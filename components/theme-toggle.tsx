"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} className="transition-all" /> : <Moon size={20} className="transition-all" />}
      <span className="ml-2 text-sm">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
    </button>
  )
}
