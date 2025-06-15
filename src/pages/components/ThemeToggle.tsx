"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Monitor, Check, CheckCircle2 } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const themes = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
]

export default function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()
  const [showSaved, setShowSaved] = useState(false)

  const currentTheme = themes.find((t) => t.value === theme)
  const CurrentIcon = currentTheme?.icon || Monitor

  const handleThemeChange = (newTheme: typeof theme) => {
    if (newTheme !== theme) {
      setTheme(newTheme)

      // Show saved indicator briefly
      setShowSaved(true)
      setTimeout(() => setShowSaved(false), 2000)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-white/10 gap-1 sm:gap-2 relative px-2 sm:px-3"
        >
          <CurrentIcon className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Theme</span>
          {showSaved && (
            <div className="absolute -top-1 -right-1">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-white/20 dark:border-gray-700/20"
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => handleThemeChange(themeOption.value)}
              className="flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="font-medium">{themeOption.label}</span>
                {themeOption.value === "system" && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">({actualTheme})</span>
                )}
              </div>
              {theme === themeOption.value && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
            </DropdownMenuItem>
          )
        })}
        {showSaved && (
          <div className="px-2 py-1 text-xs text-green-600 dark:text-green-400 border-t border-gray-200 dark:border-gray-700 mt-1">
            ✓ Theme preference saved
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}