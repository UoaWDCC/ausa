export type Event = {
  id: string
  title: string
  heroImage?: {
    src: string
    alt: string
  }
  startTime?: string
  endTime?: string
  content: {
    subtitle?: string
    body: string
    callToAction?: {
      text: string
      href: string
    }
  }
  attendees?: string[]
}

export interface UpdateEventPackage {
  id?: string
  title?: string
  heroImage?: {
    src: string
    alt?: string
  }
  startTime?: string
  endTime?: string
  content?: {
    subtitle?: string
    body?: string
    callToAction?: {
      text?: string
      href?: string
    }
  }
  attendees?: string[]
}
