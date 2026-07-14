import { siteLabel } from '../data/cv'
import { SectionHead } from './SectionHead'

function ExternalLinkIcon() {
  return (
    <svg
      className="site-icon"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 4h6v6M20 4l-9 9M10 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4"
      />
    </svg>
  )
}

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
              {group.sites.map((url) => {
                const label = siteLabel(url)
                return (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noreferrer" title={label}>
                      <span className="project-link-text">
                        <ExternalLinkIcon />
                        <span>{label}</span>
                      </span>
                      <span className="link-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
