"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme('light')}
      className="rounded-full p-2 hover:bg-secondary"
    >
      <Sun className="h-5 w-5" />
    </button>
  )
}