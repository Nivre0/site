/**
 * Everything personal about the site lives here.
 * Edit this file to change the content — the components read from it.
 */

export type Link = {
  label: string
  href: string
}

export type Experience = {
  role: string
  org: string
  period: string
  description: string
}

export type Project = {
  name: string
  description: string
  tags: string[]
  href?: string
}

export const profile = {
  name: 'Your Name',
  /** Shown under the name on the home page. */
  tagline: 'Software developer',
  /** Optional — city, country. Leave empty to hide. */
  location: '',
  /** One or two short paragraphs for the home page. */
  intro: [
    'Hi, I’m — replace this with a sentence or two about who you are and what you work on.',
    'The second paragraph is a good place for what you’re currently focused on, or what you’d like people to reach out about.',
  ],
  /** Put an image at public/avatar.jpg and set this, or leave empty to hide. */
  avatar: '',
  email: '',
} satisfies {
  name: string
  tagline: string
  location: string
  intro: string[]
  avatar: string
  email: string
}

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

export const about = {
  /** Longer free-form paragraphs for the About page. */
  paragraphs: [
    'This is the longer version of your story. Where you started, what you’ve worked on, what you care about.',
    'Keep it in your own voice — a few short paragraphs beat a wall of text.',
  ],
  /** Rendered as pills. Group however you like. */
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Docker',
  ],
  /** Set to an empty array to hide the timeline section. */
  experience: [
    {
      role: 'Your role',
      org: 'Company or project',
      period: '2024 — present',
      description: 'A line about what you do there and what you shipped.',
    },
    {
      role: 'Previous role',
      org: 'Earlier company',
      period: '2021 — 2024',
      description: 'Another line. Delete or add entries freely.',
    },
  ] satisfies Experience[],
}

export const projects: Project[] = [
  {
    name: 'Project one',
    description:
      'What it does and why you built it. One or two sentences is plenty.',
    tags: ['React', 'TypeScript'],
    href: '',
  },
  {
    name: 'Project two',
    description: 'Another thing you made. Remove this file’s placeholders as you go.',
    tags: ['Python'],
    href: '',
  },
]
