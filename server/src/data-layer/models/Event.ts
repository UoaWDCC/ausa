export type Event = {
  id: string
  title: string
  description: string
  date: string
  link?: string
}

export interface UpdateEventPackage {
  title?: string
  description?: string
  date?: string
  link?: string
}
