function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-2.5a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2h-1.5ZM3 12a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm13.95 5.45a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41ZM4.58 4.58a1 1 0 0 1 1.41 0L7.05 5.64A1 1 0 1 1 5.64 7.05L4.58 6a1 1 0 0 1 0-1.41Zm12.78-1.41 1.06 1.06a1 1 0 1 1-1.41 1.41L16 4.58a1 1 0 0 1 1.36-1.41ZM5.64 16.95l1.06 1.06a1 1 0 1 1-1.41 1.41L4.23 18.36a1 1 0 0 1 1.41-1.41ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.5 13.2A6.7 6.7 0 0 1 10.8 7.5a6.4 6.4 0 0 1 .4-2.2A7.5 7.5 0 1 0 18.7 13a6.5 6.5 0 0 1-2.2.2Z"
      />
    </svg>
  )
}

export function Header({
  t,
  lang,
  setLang,
  isDark,
  toggleTheme,
  navOpen,
  setNavOpen,
  scrolled,
  onNavigate,
}) {
  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="logo" href="#top" onClick={onNavigate}>
        Ștefan<span>.</span>
      </a>

      <nav className={`nav${navOpen ? ' is-open' : ''}`} aria-label="Primary">
        <a href="#experience" onClick={onNavigate}>
          {t.nav.experience}
        </a>
        <a href="#skills" onClick={onNavigate}>
          {t.nav.skills}
        </a>
        <a href="#work" onClick={onNavigate}>
          {t.nav.work}
        </a>
        <a href="#about" onClick={onNavigate}>
          {t.nav.about}
        </a>
        <a className="nav-cta" href="#contact" onClick={onNavigate}>
          {t.nav.contact}
        </a>
      </nav>

      <div className="header-tools">
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={`lang-btn${lang === 'en' ? ' is-active' : ''}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn${lang === 'ro' ? ' is-active' : ''}`}
            onClick={() => setLang('ro')}
            aria-pressed={lang === 'ro'}
          >
            RO
          </button>
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDark ? t.controls.themeLight : t.controls.themeDark}
          title={isDark ? t.controls.themeLight : t.controls.themeDark}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          className={`nav-toggle${navOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={navOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
