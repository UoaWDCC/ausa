import type { Faq } from 'types/types'

export type FaqCreationParams = Omit<Faq, 'id'>
export type FaqUpdateParams = Partial<FaqCreationParams>
