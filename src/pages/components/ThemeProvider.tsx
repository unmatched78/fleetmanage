"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: "light" | "dark"
}

const THEME_STORAGE_KEY = "fleetconnect-theme"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Helper function to get saved theme from localStorage
const getSavedTheme = (): Theme => {
  if (typeof window === "undefined") return "system" // Default for SSR

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    if (saved && (saved === "light" || saved === "dark" || saved === "system")) {
      return saved as Theme
    }
  } catch (error) {
    console.warn("Failed to read theme preference from localStorage:", error)
  }

  return "system" // Default fallback
}

// Helper function to save theme to localStorage
const saveTheme = (theme: Theme): void => {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch (error) {
    console.warn("Failed to save theme preference to localStorage:", error)
  }
}

// Helper function to get system theme preference
const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "dark"

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// Helper function to apply theme to document
const applyTheme = (theme: "light" | "dark") => {
  if (typeof window === "undefined") return

  const root = document.documentElement

  if (theme === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("dark")
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const savedTheme = getSavedTheme()
    const systemTheme = getSystemTheme()

    setThemeState(savedTheme)

    const resolvedTheme = savedTheme === "system" ? systemTheme : savedTheme
    setActualTheme(resolvedTheme)
    applyTheme(resolvedTheme)

    setIsInitialized(true)
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const newTheme = e.matches ? "dark" : "light"
        setActualTheme(newTheme)
        applyTheme(newTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    saveTheme(newTheme)

    const resolvedTheme = newTheme === "system" ? getSystemTheme() : newTheme
    setActualTheme(resolvedTheme)
    applyTheme(resolvedTheme)
  }

  // Don't render until we've initialized the theme
  if (!isInitialized) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}