import type { Faq } from 'data-layer/models/Faq'

export type createFaqRequest = Omit<Faq, 'id'>

export type updateFaqRequest = Partial<createFaqRequest>