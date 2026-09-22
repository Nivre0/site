import { NavLink, Outlet } from 'react-router-dom'
import { links, profile } from '../data/profile'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
]

export default function Layout() {
  return (
    <div className="shell">
      <header className="site-header">
        <NavLink to="/" className="brand">
          {profile.name}
        </NavLink>
        <nav className="site-nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="footer-links">
          {profile.email && (
            <a href={`mailto:${profile.email}`}>Email</a>
          )}
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
