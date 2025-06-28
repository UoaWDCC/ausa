import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { ExternalResource } from 'data-layer/models/ExternalResource'

export class ExternalResourceDataService {
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
}
