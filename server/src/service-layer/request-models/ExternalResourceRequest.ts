import type { ExternalResource } from 'types/types'

export type ExternalResourceCreationParams = Omit<ExternalResource, 'id'>
export type ExternalResourceUpdateParams =
  Partial<ExternalResourceCreationParams>
