import { useEffect, useState } from 'react'
import {
  buildExperience,
  buildProjects,
  getUi,
} from './i18n/translations'
import { useTheme } from './hooks/useTheme'
import { useLocale } from './hooks/useLocale'
import { useReveal } from './hooks/useReveal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { toggleTheme, isDark } = useTheme()
  const { lang, setLang } = useLocale()
  const t = getUi(lang)
  const experience = buildExperience(lang)
  const projects = buildProjects(lang)

  useReveal(lang)

  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [t])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeNav = () => setNavOpen(false)

  return (
    <div className="page">
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        toggleTheme={toggleTheme}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrolled={scrolled}
        onNavigate={closeNav}
      />

      <main id="top">
        <Hero t={t} />
        <Experience t={t} jobs={experience} />
        <Skills t={t} />
        <Work t={t} projects={projects} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  )
}
