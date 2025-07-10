import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { Faq } from 'data-layer/models/Faq'
import { createFaqRequest, updateFaqRequest } from 'service-layer/request-models/FaqRequests'

export class FaqDataService {
  /**
   * Fetches all Faq from the Firestore collection.
   *
   * @returns A promise that resolves to an array of Faq objects.
   */
  public static async getAllFaq(): Promise<Faq[]> {
    const faqSnapshots =
      await FirestoreCollections.faq.get()
    return faqSnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific external resource from the Firestore collection.
   *
   * @param id The ID of the faq to fetch.
   * @returns A promise that resolves to an Faq object.
   */
  public static async getExternalResourceById(
    id: string,
  ): Promise<Faq> {
    const faqSnapshot =
      await FirestoreCollections.faq.doc(id).get()
    return faqSnapshot.data()
  }

  /**
   * Makes a new faq in the Firestore collection.
   *
   * @param faq The faq to create.
   * @returns A promise that resolves when the creation is complete.
   */
  public static async createFaq(
    faq: createFaqRequest,
  ): Promise<Faq> {
    const docRef = await FirestoreCollections.faq.doc()
    await docRef.set({id: docRef.id, ...faq})
    const createdFaqSnapshot = await docRef.get()
    return createdFaqSnapshot.data()
  }

  public static async updateFaq(
    id: string,
    faq: updateFaqRequest,
  ): Promise<Faq> {
    const docRef = FirestoreCollections.faq.doc(id)
    await docRef.update(faq)
    const updatedResourceSnapshot = await docRef.get()
    return updatedResourceSnapshot.data()
  }

  public static async deleteFaq(id: string): Promise<void> {
    const docRef = FirestoreCollections.faq.doc(id)
    await docRef.delete()
  }

  public static async deleteFaqsByCategoryId(categoryId: string): Promise<void> {
    const faqSnapshots = await FirestoreCollections.faq
      .where('categoryId', '==', categoryId)
      .get()
    for (const doc of faqSnapshots.docs) {
      await doc.ref.delete()
    }
  }
}
