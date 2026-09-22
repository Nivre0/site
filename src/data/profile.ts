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
  /** Company or school. Leave out for entries that don't have one. */
  org?: string
  period: string
  description: string
}

/** Ordered strongest to weakest — the About page renders them in this order. */
export type SkillLevel = 'mastered' | 'high' | 'moderate' | 'low'

export type SkillGroup = {
  level: SkillLevel
  label: string
  /** An empty group is skipped, so you can leave a level in place until you fill it. */
  skills: string[]
}

export type Project = {
  name: string
  description: string
  tags: string[]
  href?: string
}

export const profile = {
  name: 'Tim Leuenberger',
  /** Shown under the name on the home page. */
  tagline: 'Software developer',
  /** Optional — city, country. Leave empty to hide. */
  location: 'Zurich, Switzerland',
  /** One or two short paragraphs for the home page. */
  intro: [
    'I’m a software developer based in Zurich, Switzerland. I trained through the Swiss apprenticeship route and finished as an application developer in the summer of 2026.',
    'I work mostly with C#, Python and SQL, and I like problems that stretch from the database up to the interface. Right now I’m interning at Kajima — if you’d like to work together, or just want to say hello, my inbox is open.',
  ],
  /** Put an image at public/avatar.jpg and set this, or leave empty to hide. */
  avatar: '',
  email: 'timleu256@gmail.com',
} satisfies {
  name: string
  tagline: string
  location: string
  intro: string[]
  avatar: string
  email: string
}

export const links: Link[] = [
  { label: 'GitHub', href: 'https://github.com/Nivre0/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tim-l-a65275274' },
]

export const about = {
  /** Longer free-form paragraphs for the About page. */
  paragraphs: [
    'I’m a software developer from Zurich, Switzerland. I came into the field the Swiss way: a four-year apprenticeship, working at a company while studying alongside it, finishing in July 2026 with the federal diploma as an application developer — Informatiker Applikationsentwicklung EFZ.',
    'That route means you’re in a real team from the first year, so most of what I know comes from building and maintaining software people actually use, not only from coursework. It also left me comfortable moving between languages rather than tied to one.',
    'I’m currently interning at Kajima until the end of 2026. After that I’ll be completing my Swiss military service, and once that’s behind me I’ll be looking for my next role as a developer.',
    // A personal line fits nicely here — what you do outside of work, or what you're learning next.
  ],
  /**
   * Skills grouped by how well you know them.
   * Empty groups are skipped, so 'mastered' stays hidden until you put something in it.
   */
  skillGroups: [
    {
      level: 'mastered',
      label: 'Mastered',
      skills: [],
    },
    {
      level: 'high',
      label: 'High',
      skills: ['C#', 'SQL', 'Python'],
    },
    {
      level: 'moderate',
      label: 'Moderate',
      skills: ['JavaScript', 'TypeScript', 'Java', 'HTML & CSS'],
    },
    {
      level: 'low',
      label: 'Low',
      skills: ['C', 'C++'],
    },
  ] satisfies SkillGroup[],
  /** Set to an empty array to hide the timeline section. */
  experience: [
    {
      role: 'Swiss military service',
      period: 'From 2027',
      description: 'Mandatory service, starting after the internship ends.',
    },
    {
      role: 'Intern',
      org: 'Kajima',
      period: 'Sep 2026 — Dec 2026',
      description:
        'Working as a developer alongside the team, building on what I learned during my apprenticeship.',
    },
    {
      role: 'Apprentice application developer (EFZ)',
      org: 'KPMG',
      period: 'Aug 2022 — Jul 2026',
      description:
        'Four-year Swiss apprenticeship combining full-time work as a developer with vocational school, completed with the federal diploma Informatiker Applikationsentwicklung EFZ.',
    },
  ] satisfies Experience[],
}

/**
 * Nothing here yet — the Projects page shows a short placeholder until you add
 * an entry. One object per project and the page fills itself in.
 */
export const projects: Project[] = []
