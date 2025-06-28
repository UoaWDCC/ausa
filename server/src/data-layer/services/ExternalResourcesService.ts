import { collections } from 'data-layer/firebase-collections'
import type { WriteResult } from 'firebase-admin/firestore'
import type {
  ExternalResourceCreationParams,
  ExternalResourceUpdateParams,
} from 'service-layer/request-models/ExternalResourceRequest'
import type { ExternalResource } from 'types/types'

export default class ExternalResourceService {
  /**
   * Gets an External Resource document by its ID.
   *
   * @param id - The ID of the ExternalResource document to retrieve
   * @returns the ExternalResource document
   */
  public async getExternalResource(id: string): Promise<ExternalResource> {
    const res = await collections.externalResource.doc(id).get()
    return res.data()
  }

  /**
   * Gets all ExternalResource documents.
   * @return an array of all ExternalResource documents
   *
   * */
  public async getAllExternalResources(): Promise<ExternalResource[]> {
    const res = await collections.externalResource.get()
    return res.docs.map((doc) => doc.data())
  }

  /**
   * Creates a new ExternalResource document.
   * @param newExternalResource - The ExternalResource document to create
   * @returns the created ExternalResource document
   */
  public async createExternalResource(
    newExternalResource: ExternalResourceCreationParams,
  ): Promise<ExternalResource> {
    const ref = collections.externalResource.doc()
    await ref.set({ ...newExternalResource, id: ref.id })
    return { ...newExternalResource, id: ref.id }
  }

  /**
   * Updates an existing ExternalResource document.
   *
   *  @param id - The ID of the ExternalResource document to update
   *  @param partialExternalResource - The partial ExternalResource document with updated fields
   *  @returns the write result of the update operation
   */
  public async updateExternalResource(
    id: string,
    partialExternalResource: ExternalResourceUpdateParams,
  ): Promise<WriteResult> {
    return await collections.externalResource
      .doc(id)
      .update(partialExternalResource)
  }

  /**
   * Deletes an External Resource document by its ID.
   * @param id - The ID of the External Resource document to delete
   * @returns the write result of the delete operation
   */
  public async deleteExternalResource(id: string): Promise<WriteResult> {
    return await collections.externalResource.doc(id).delete()
  }
}
