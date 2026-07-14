import { shared } from '../data/cv'

export function Contact({ t }) {
  return (
    <section id="contact" className="section section-contact">
      <div className="contact-panel" data-reveal>
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>
          {t.contact.titleBefore}
          <span className="accent-text">{t.contact.titleAccent}</span>
        </h2>
        <p className="lede">{t.contact.lede}</p>
        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${shared.email}`}>
            {shared.email}
          </a>
          <a
            className="btn btn-ghost"
            href={`tel:${shared.phone.replace(/\s/g, '')}`}
          >
            {shared.phone}
          </a>
          <a
            className="btn btn-ghost"
            href={shared.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  )
}
