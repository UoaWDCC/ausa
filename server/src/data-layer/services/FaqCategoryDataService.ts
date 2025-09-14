import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { FaqCategory } from 'data-layer/models/FaqCategories'
import type {
  createFaqCategoryRequest,
  updateFaqCategoryRequest,
} from 'service-layer/request-models/FaqCategoryRequests'

export class FaqCategoryDataService {
  /**
   * Fetches all FAQ Categories from the Firestore collection.
   *
   * @returns A promise that resolves to an array of FaqCategory objects.
   */
  public static async getAllFaqCategories(): Promise<FaqCategory[]> {
    const faqCategorySnapshots = await FirestoreCollections.faqCategories.get()
    return faqCategorySnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific FAQ Category from the Firestore collection.
   *
   * @param id The ID of the FAQ Category to fetch.
   * @returns A promise that resolves to a FaqCategory object.
   */
  public static async getFaqCategoryById(id: string): Promise<FaqCategory> {
    const faqCategorySnapshot = await FirestoreCollections.faqCategories
      .doc(id)
      .get()
    return faqCategorySnapshot.data()
  }

  public static async getFaqCategoryByName(name: string): Promise<FaqCategory> {
    const faqCategorySnapshot = await FirestoreCollections.faqCategories
      .where('name', '==', name)
      .get()
    return faqCategorySnapshot.docs.map((doc) => doc.data())[0]
  }

  public static async getFaqCategoryByURL(url: string): Promise<FaqCategory> {
    const faqCategorySnapshot = await FirestoreCollections.faqCategories
      .where('url', '==', url)
      .get()
    return faqCategorySnapshot.docs.map((doc) => doc.data())[0]
  }

  /**
   * Makes a new FAQ Category in the Firestore collection.
   *
   * @param faqCategory The FAQ Category to create.
   * @returns A promise that resolves when the creation is complete.
   */
  public static async createFaqCategory(
    faqCategory: createFaqCategoryRequest,
  ): Promise<FaqCategory> {
    const docRef = await FirestoreCollections.faqCategories.doc()
    await docRef.set({ id: docRef.id, ...faqCategory })
    const createdCategorySnapshot = await docRef.get()
    return createdCategorySnapshot.data()
  }

  /**
   * Updates an existing FAQ Category in the Firestore collection.
   * @param id The ID of the FAQ Category to update.
   * @param faqCategory The updated FAQ Category data.
   * @returns A promise that resolves to the updated FaqCategory object.
   */

  public static async updateFaqCategory(
    id: string,
    faqCategory: updateFaqCategoryRequest,
  ): Promise<FaqCategory> {
    const docRef = FirestoreCollections.faqCategories.doc(id)
    await docRef.update(faqCategory)
    const updatedCategorySnapshot = await docRef.get()
    return updatedCategorySnapshot.data()
  }

  public static async deleteFaqCategory(id: string): Promise<void> {
    const docRef = FirestoreCollections.faqCategories.doc(id)
    await docRef.delete()
  }
}
