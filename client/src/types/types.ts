export interface Faq {
  id: string
  question: string
  answer: string
  categoryId: string
}

export interface FaqCategory {
  id: string
  name: string
  url: string
}

export interface ExternalResource {
  id: string
  title: string
  url: string
  description?: string
  categoryId: string
}

export interface User {
  id: string
  username: string
  email: string
  name: string
}

export interface ExternalResourceCategory {
  id: string
  name: string
  description: string
}

export interface Event {
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
