import type { FaqCategory } from 'data-layer/models/FaqCategories'

export type createFaqCategoryRequest = Omit<FaqCategory, 'id'>

export type updateFaqCategoryRequest = Partial<createFaqCategoryRequest>
