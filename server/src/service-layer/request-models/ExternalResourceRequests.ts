import type { ExternalResource } from 'data-layer/models/ExternalResource'

export type createExternalResourceRequest = Omit<ExternalResource, 'id'>

export type updateExternalResourceRequest =
  Partial<createExternalResourceRequest>
