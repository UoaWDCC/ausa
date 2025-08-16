import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { ExternalResourceCategory } from 'data-layer/models/ExternalResourceCategories'
import type {
  createExternalResourceCategoryRequest,
  updateExternalResourceCategoryRequest,
} from 'service-layer/request-models/ExternalResourceCategoryRequests'

export class ExternalResourceCategoryDataService {
  /**
   * Fetches all ExternalResource Categories from the Firestore collection.
   *
   * @returns A promise that resolves to an array of ExternalResource objects.
   */
  public static async getAllCategories(): Promise<ExternalResourceCategory[]> {
    const externalResourceCategorySnapshots =
      await FirestoreCollections.externalResourceCategories.get()
    return externalResourceCategorySnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific External Resource Category from the Firestore collection.
   *
   * @param id The ID of the External Resource Category to fetch.
   * @returns A promise that resolves to a External Resource Category object.
   */
  public static async getCategoryById(
    id: string,
  ): Promise<ExternalResourceCategory> {
    const categorySnapshot =
      await FirestoreCollections.externalResourceCategories.doc(id).get()
    return categorySnapshot.data()
  }

  public static async getCategoryByName(
    name: string,
  ): Promise<ExternalResourceCategory> {
    const categorySnapshot =
      await FirestoreCollections.externalResourceCategories
        .where('name', '==', name)
        .get()
    return categorySnapshot.docs.map((doc) => doc.data())[0]
  }

  /**
   * Makes a new External Resource Category in the Firestore collection.
   *
   * @param category The Category to create.
   * @returns A promise that resolves when the creation is complete.
   */
  public static async createCategory(
    category: createExternalResourceCategoryRequest,
  ): Promise<ExternalResourceCategory> {
    const docRef = await FirestoreCollections.externalResourceCategories.doc()
    await docRef.set({ id: docRef.id, ...category })
    const createdCategorySnapshot = await docRef.get()
    return createdCategorySnapshot.data()
  }

  /**
   * Updates an existing Category in the Firestore collection.
   * @param id The ID of the External Resource Category to update.
   * @param category The updated External Resource Category data.
   * @returns A promise that resolves to the updated object.
   */

  public static async updateCategory(
    id: string,
    category: updateExternalResourceCategoryRequest,
  ): Promise<ExternalResourceCategory> {
    const docRef = FirestoreCollections.externalResourceCategories.doc(id)
    await docRef.update(category)
    const updatedCategorySnapshot = await docRef.get()
    return updatedCategorySnapshot.data()
  }

  public static async deleteCategory(id: string): Promise<void> {
    const docRef = FirestoreCollections.externalResourceCategories.doc(id)
    await docRef.delete()
  }
}
