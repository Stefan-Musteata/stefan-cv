import { SectionHead } from './SectionHead'

export function Experience({ t, jobs }) {
  return (
    <section id="experience" className="section">
      <SectionHead
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        lede={t.experience.lede}
      />

      <div className="timeline">
        {jobs.map((job, i) => (
          <article
            key={job.id}
            className="timeline-item"
            data-reveal
            style={{ '--i': i }}
          >
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot" />
            </div>
            <div className="timeline-panel">
              <div className="timeline-top">
                <time>{job.period}</time>
                {job.location && <span className="badge">{job.location}</span>}
              </div>
              <h3>{job.role}</h3>
              <p className="company">
                {job.company}
                {job.link && (
                  <>
                    {' '}
                    <a href={job.link.url} target="_blank" rel="noreferrer">
                      {job.link.name}
                    </a>
                  </>
                )}
              </p>
              {job.activities && <p className="activities">{job.activities}</p>}
              {job.tech && (
                <ul className="tech-list">
                  {job.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {job.sites && (
                <ul className="site-chips">
                  {job.sites.map((site) => (
                    <li key={site.url}>
                      <a href={site.url} target="_blank" rel="noreferrer">
                        {site.name}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
