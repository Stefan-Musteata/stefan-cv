import { siteLabel } from '../data/cv'
import { SectionHead } from './SectionHead'

export function Work({ t, projects }) {
  return (
    <section id="work" className="section">
      <SectionHead
        eyebrow={t.work.eyebrow}
        title={t.work.title}
        lede={t.work.lede}
      />

      <div className="projects">
        {projects.map((group) => (
          <article key={group.id} className="project-group" data-reveal>
            <header className="project-head">
              <div>
                <h3>{group.label}</h3>
                <p>{group.stack}</p>
              </div>
              <span className="project-count">{group.sites.length}</span>
            </header>
            <ul className="project-links">
              {group.sites.map((url) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <span>{siteLabel(url)}</span>
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
