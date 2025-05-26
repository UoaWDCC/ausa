export interface Faq {
  question: string
  answer: string
}

export type FaqUpdateParams = Partial<Faq>
export type FaqCreationParams = Faq
