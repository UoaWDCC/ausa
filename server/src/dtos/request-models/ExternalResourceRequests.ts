import type { ExternalResource } from 'models/ExternalResource'

export type createExternalResourceRequest = Omit<ExternalResource, 'id'>

export type updateExternalResourceRequest =
  Partial<createExternalResourceRequest>
