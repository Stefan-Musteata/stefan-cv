import { useEffect, useState } from 'react'

const STORAGE_KEY = 'webcv-lang'

function getPreferredLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ro') return saved
  } catch {
    /* ignore */
  }
  const browser = (navigator.language || 'en').toLowerCase()
  return browser.startsWith('ro') ? 'ro' : 'en'
}

export function useLocale() {
  const [lang, setLang] = useState(() =>
    typeof window === 'undefined' ? 'en' : getPreferredLang(),
  )

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggleLang = () =>
    setLang((current) => (current === 'en' ? 'ro' : 'en'))

  return { lang, setLang, toggleLang }
}
