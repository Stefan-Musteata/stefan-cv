import { shared } from '../data/cv'
import { SectionHead } from './SectionHead'

const tiers = [
  { key: 'advanced', level: 'high', skillsKey: 'advanced' },
  { key: 'intermediate', level: 'mid', skillsKey: 'intermediate' },
  { key: 'familiar', level: 'low', skillsKey: 'basic' },
]

export function Skills({ t }) {
  return (
    <section id="skills" className="section section-band">
      <SectionHead
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        lede={t.skills.lede}
      />

      <div className="skills-board">
        {tiers.map((tier) => (
          <div className="skill-tier" data-reveal key={tier.key}>
            <div className="skill-tier-label">
              <span>{t.skills[tier.key]}</span>
              <span className="meter" data-level={tier.level} />
            </div>
            <ul>
              {shared.skills[tier.skillsKey].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
