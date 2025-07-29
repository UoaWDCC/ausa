export type Event = {
  id: string
  name: string
  location: string
  date: string
}

export interface UpdateEventPackage {
  name?: string
  location?: string
  date?: string
}
