export type Event = {
  id: string
  title: string
  heroImage?: {
    src: string
    alt: string
  }
  content: {
    subtitle?: string
    body: string
    callToAction?: {
      text: string
      href: string
    }
  }
}

export interface UpdateEventPackage {
  id?: string
  title?: string
  heroImage?: {
    src: string
    alt?: string
  }
  content?: {
    subtitle?: string
    body?: string
    callToAction?: {
      text?: string
      href?: string
    }
  }
}
