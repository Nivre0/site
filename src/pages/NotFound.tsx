import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Not found')

  return (
    <>
      <h1>Page not found</h1>
      <p className="muted">That page doesn’t exist (or doesn’t exist yet).</p>
      <Link className="button" to="/">
        Back home
      </Link>
    </>
  )
}
