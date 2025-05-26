export interface Faq {
  id: string
  question: string
  answer: string
}

export type FaqCreationParams = Omit<Faq, 'id'>
export type FaqUpdateParams = Partial<FaqCreationParams>
