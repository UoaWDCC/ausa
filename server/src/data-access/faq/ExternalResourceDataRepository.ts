import FirestoreCollections from 'data-access/adapters/FirestoreCollections'
import type { ExternalResource } from 'models/ExternalResource'
import type {
  createExternalResourceRequest,
  updateExternalResourceRequest,
} from 'dtos/request-models/ExternalResourceRequests'

export class ExternalResourceDataRepository{
  /**
   * Fetches all external resources from the Firestore collection.
   *
   * @returns A promise that resolves to an array of ExternalResource objects.
   */
  public static async getAllExternalResources(): Promise<ExternalResource[]> {
    const externalResourceSnapshots =
      await FirestoreCollections.externalResources.get()
    return externalResourceSnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific external resource from the Firestore collection.
   *
   * @param id The ID of the external resource to fetch.
   * @returns A promise that resolves to an ExternalResource object.
   */
  public static async getExternalResourceById(
    id: string,
  ): Promise<ExternalResource> {
    const externalResourceSnapshot =
      await FirestoreCollections.externalResources.doc(id).get()
    return externalResourceSnapshot.data()
  }

  /**
   * Makes a new external resource in the Firestore collection.
   *
   * @param externalResource The external resource to create.
   * @returns A promise that resolves when the creation is complete.
   */
  public static async createExternalResource(
    externalResource: createExternalResourceRequest,
  ): Promise<ExternalResource> {
    const docRef = await FirestoreCollections.externalResources.doc()
    await docRef.set({ id: docRef.id, ...externalResource })
    const createdResourceSnapshot = await docRef.get()
    return createdResourceSnapshot.data()
  }

  public static async updateExternalResource(
    id: string,
    externalResource: updateExternalResourceRequest,
  ): Promise<ExternalResource> {
    const docRef = FirestoreCollections.externalResources.doc(id)
    await docRef.update(externalResource)
    const updatedResourceSnapshot = await docRef.get()
    return updatedResourceSnapshot.data()
  }

  public static async deleteExternalResource(id: string): Promise<void> {
    const docRef = FirestoreCollections.externalResources.doc(id)
    await docRef.delete()
  }

  public static async deleteByCategoryId(categoryId: string): Promise<void> {
    const faqSnapshots = await FirestoreCollections.externalResources
      .where('categoryId', '==', categoryId)
      .get()
    for (const doc of faqSnapshots.docs) {
      await doc.ref.delete()
    }
  }

  public static async getByCategoryId(
    categoryId: string,
  ): Promise<ExternalResource[]> {
    const faqSnapshots = await FirestoreCollections.externalResources
      .where('categoryId', '==', categoryId)
      .get()
    return faqSnapshots.docs.map((doc) => doc.data())
  }

  public static async deleteAllExternalResources(): Promise<void> {
    const faqSnapshots =
      await FirestoreCollections.externalResourceCategories.get()
    for (const doc of faqSnapshots.docs) {
      await doc.ref.delete()
    }
  }
}
