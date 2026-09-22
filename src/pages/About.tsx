import Section from '../components/Section'
import { about, profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

const skillGroups = about.skillGroups.filter((group) => group.skills.length > 0)

export default function About() {
  usePageTitle(`About · ${profile.name}`)

  return (
    <>
      <h1>About</h1>

      {about.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {skillGroups.length > 0 && (
        <Section title="Things I work with">
          {skillGroups.map((group) => (
            <div key={group.level} className="skill-group">
              <h3 className="skill-level">{group.label}</h3>
              <ul className="pills" data-level={group.level}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {about.experience.length > 0 && (
        <Section title="Experience">
          <ol className="timeline">
            {about.experience.map((item) => (
              <li key={`${item.role}-${item.period}`}>
                <div className="timeline-head">
                  <strong>{item.role}</strong>
                  <span className="muted">{item.period}</span>
                </div>
                {item.org && <div className="muted">{item.org}</div>}
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}
    </>
  )
}
