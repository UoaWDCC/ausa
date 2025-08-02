import type { ExternalResourceCategory } from 'data-layer/models/ExternalResourceCategories'

export type createExternalResourceCategoryRequest = Omit<
  ExternalResourceCategory,
  'id'
>

export type updateExternalResourceCategoryRequest =
  Partial<createExternalResourceCategoryRequest>
