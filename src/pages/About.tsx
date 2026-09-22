import Section from '../components/Section'
import { about, profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle(`About · ${profile.name}`)

  return (
    <>
      <h1>About</h1>

      {about.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {about.skills.length > 0 && (
        <Section title="Things I work with">
          <ul className="pills">
            {about.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Section>
      )}

      {about.experience.length > 0 && (
        <Section title="Experience">
          <ol className="timeline">
            {about.experience.map((item) => (
              <li key={`${item.org}-${item.period}`}>
                <div className="timeline-head">
                  <strong>{item.role}</strong>
                  <span className="muted">{item.period}</span>
                </div>
                <div className="muted">{item.org}</div>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}
    </>
  )
}
