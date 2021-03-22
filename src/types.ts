interface ContentObject {

  requirements?: Array<string | string[]>
  process?: Array<string | string[]>
  challenges?: Array<string | string[]>
  future?: Array<string | string[]>
}

export interface HomeProps {

  projects: Array< {
    content: ContentObject
    language: string
    repo: string
    title: string
  } >
  kebabCase: Function
}

export interface PageProps {

  content: ContentObject
  kebabCaseTitle: string
  repo: string
  title: string
}

export interface CardProps {

  kebabCaseTitle: string
  language: string
  title: string
}

export interface LanguageBadgeProps {

  language: string
}

export interface ButtonProps {

  children: string
  icon?: string
  url: string
}

