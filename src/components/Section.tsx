import type { ReactNode } from 'react'

type Props = {
  title?: string
  children: ReactNode
}

export default function Section({ title, children }: Props) {
  return (
    <section className="section">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  )
}
