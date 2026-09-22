import { Link } from 'react-router-dom'
import { links, profile } from '../data/profile'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle(profile.name)

  return (
    <>
      <section className="hero">
        {profile.avatar && (
          <img className="avatar" src={profile.avatar} alt="" width={96} height={96} />
        )}
        <div>
          <h1>{profile.name}</h1>
          <p className="tagline">
            {profile.tagline}
            {profile.location && <> · {profile.location}</>}
          </p>
        </div>
      </section>

      {profile.intro.map((paragraph, i) => (
        <p key={i} className="lead">
          {paragraph}
        </p>
      ))}

      <div className="actions">
        <Link className="button" to="/about">
          More about me
        </Link>
        {profile.email && (
          <a className="button button-ghost" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
        )}
        {links.map((link) => (
          <a
            key={link.href}
            className="button button-ghost"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
