"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check, CheckCircle2 } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

const languages = [
  { code: "en" as const, name: "English", flag: "🇺🇸" },
  { code: "rw" as const, name: "Kinyarwanda", flag: "🇷🇼" },
]

export default function LanguageDropdown() {
  const { language, setLanguage, t } = useLanguage()
  const [showSaved, setShowSaved] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === language)

  const handleLanguageChange = (langCode: typeof language) => {
    if (langCode !== language) {
      setLanguage(langCode)

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
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">{t("nav.language")}</span>
          <span className="text-base sm:text-lg">{currentLanguage?.flag}</span>
          {showSaved && (
            <div className="absolute -top-1 -right-1">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-lg border-white/20">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-100/50"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </div>
            {language === lang.code && <Check className="w-4 h-4 text-blue-600" />}
          </DropdownMenuItem>
        ))}
        {showSaved && (
          <div className="px-2 py-1 text-xs text-green-600 border-t border-gray-200 mt-1">
            ✓ Language preference saved
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}