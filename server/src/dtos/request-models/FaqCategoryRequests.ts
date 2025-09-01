import type { FaqCategory } from 'models/FaqCategories'

export type createFaqCategoryRequest = Omit<FaqCategory, 'id'>

export type updateFaqCategoryRequest = Partial<createFaqCategoryRequest>
