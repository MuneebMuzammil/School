"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="opacity-0">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`rounded-full transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-800 text-yellow-400 hover:bg-slate-700 hover:text-yellow-300"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
    >
      {theme === "dark" ? <Sun className="h-5 w-5 animate-fade-in" /> : <Moon className="h-5 w-5 animate-fade-in" />}
      <span className="sr-only">{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
    </Button>
  )
}
