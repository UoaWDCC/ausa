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
}
