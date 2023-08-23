export interface SummaryAuthor {
  key: string
  name: string
  photo: string
}

export interface Author {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: AuthorItem[]
}

export interface AuthorItem {
  key: string
  type: string
  name: string
  alternate_names?: string[]
  birth_date?: string
  top_work?: string
  work_count: number
  top_subjects?: string[]
  _version_: number
  death_date?: string
}
