// Object types

interface Writeup {

  content: string | string[]
  type: string
}

interface Project {

  language: string
  repo: string
  title: string
  writeup: Writeup[]
}

// Prop types

export interface HomeProps {

  kebabCase: Function
  projects: Project[]
}

export interface CardProps {

  kebabCaseTitle: string
  language: string
  title: string
}

export interface LanguageBadgeProps {

  language: string
}

export interface PageProps {

  kebabCaseTitle: string
  repo: string
  title: string
  writeup: Writeup[]
}

export interface ButtonProps {

  children: string
  icon?: string
  url: string
}

