export interface externalResource {
  title: string
  url: string
  description?: string
}

export type ExternalResourceUpdateParams = Partial<externalResource>
export type ExternalResourceCreationParams = externalResource
