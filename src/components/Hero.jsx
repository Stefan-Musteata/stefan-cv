import { shared } from '../data/cv'
import heroImg from '../assets/hero-art.svg'
import profileImg from '../assets/profile.jpg'

export function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-backdrop" />
        <div className="hero-art">
          <img src={heroImg} alt="" className="hero-img" />
        </div>
        <div className="hero-shade" />
        <div className="hero-orb hero-orb--a" />
        <div className="hero-orb hero-orb--b" />
      </div>

      <div className="hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="pulse" />
            {t.hero.kicker}
          </p>
          <h1 className="hero-name">
            <span className="hero-name-line">{shared.lastName}</span>
            <span className="hero-name-line accent">{shared.firstName}</span>
          </h1>
          <p className="hero-title">{t.hero.title}</p>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${shared.email}`}>
              {t.hero.ctaMail}
            </a>
            <a className="btn btn-ghost" href="#work">
              {t.hero.ctaWork}
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            <img
              src={profileImg}
              alt={`${shared.name} — ${t.hero.title}`}
              className="portrait-img"
              width="480"
              height="560"
            />
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#experience">
        <span className="scroll-hint-label">{t.hero.scroll}</span>
        <span className="scroll-hint-line" />
      </a>
    </section>
  )
}
