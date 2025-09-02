import type { Faq } from 'models/Faq'

export type createFaqRequest = Omit<Faq, 'id'>

export type updateFaqRequest = Partial<createFaqRequest>
