import type { ExternalResourceCategory } from 'models/ExternalResourceCategories'

export type createExternalResourceCategoryRequest = Omit<
  ExternalResourceCategory,
  'id'
>

export type updateExternalResourceCategoryRequest =
  Partial<createExternalResourceCategoryRequest>
