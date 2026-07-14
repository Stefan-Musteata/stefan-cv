import { useEffect, useState } from 'react'

const STORAGE_KEY = 'webcv-theme'

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof window === 'undefined' ? 'dark' : getPreferredTheme(),
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  const toggleTheme = () =>
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' }
}
