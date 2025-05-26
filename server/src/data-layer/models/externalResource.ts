export interface ExternalResource {
  id: string
  title: string
  url: string
  description?: string
}

export type ExternalResourceUpdateParams = Partial<ExternalResource>
export type ExternalResourceCreationParams = ExternalResource
