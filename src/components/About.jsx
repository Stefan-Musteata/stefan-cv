import { shared } from '../data/cv'
import { SectionHead } from './SectionHead'

export function About({ t }) {
  return (
    <section id="about" className="section section-band">
      <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />

      <div className="about-grid">
        <article className="glass-block" data-reveal>
          <h3>{t.about.education}</h3>
          <p className="about-title">{t.about.school}</p>
          <p className="muted">{t.about.period}</p>
          <p className="about-copy">
            {t.about.faculty}
            <br />
            {t.about.specialization}: {t.about.specializationValue}
          </p>
          <ul className="subject-list">
            {t.about.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </article>

        <article className="glass-block" data-reveal>
          <h3>{t.about.languages}</h3>
          <ul className="lang-list">
            {t.about.spoken.map((language) => (
              <li key={language.name}>
                <strong>{language.name}</strong>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>
          <h3 className="subhead">{t.about.workingStyle}</h3>
          <ul className="plain-list">
            {t.about.softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <article className="glass-block" data-reveal>
          <h3>{t.about.hobbies}</h3>
          <ul className="hobby-list">
            {t.about.hobbiesList.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
          <h3 className="subhead">{t.about.details}</h3>
          <dl className="details-list">
            <div>
              <dt>{t.about.nationality}</dt>
              <dd>{t.about.nationalityValue}</dd>
            </div>
            <div>
              <dt>{t.about.basedIn}</dt>
              <dd>{shared.location}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  )
}
