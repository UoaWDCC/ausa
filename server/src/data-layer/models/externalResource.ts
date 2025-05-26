export interface ExternalResource {
  id: string
  title: string
  url: string
  description?: string
}

export type ExternalResourceCreationParams = Omit<ExternalResource, "id">
export type ExternalResourceUpdateParams = Partial<ExternalResourceCreationParams>