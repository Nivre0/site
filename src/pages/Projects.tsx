import { profile, projects } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function Projects() {
  usePageTitle(`Projects · ${profile.name}`)

  return (
    <>
      <h1>Projects</h1>
      <p className="muted">A few things I’ve built.</p>

      <ul className="cards">
        {projects.map((project) => (
          <li key={project.name} className="card">
            <h2>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <p>{project.description}</p>
            {project.tags.length > 0 && (
              <ul className="pills pills-small">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
