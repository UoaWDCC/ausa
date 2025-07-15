import FirestoreCollections from 'data-layer/adapters/FirestoreCollections'
import type { Faq } from 'data-layer/models/Faq'

export class FaqDataService {
  /**
   * Fetches all faqs from the Firestore collection.
   *
   * @returns A promise that resolves to an array of Faq objects.
   */
  public static async getAllFaqs(): Promise<Faq[]> {
    const faqSnapshots = await FirestoreCollections.faq.get()
    return faqSnapshots.docs.map((doc) => doc.data())
  }

  /**
   * Fetches a specific faq from the Firestore collection.
   *
   * @param id The ID of the faq to fetch.
   * @returns A promise that resolves to a Faq object.
   */
  public static async getFaqById(id: string): Promise<Faq> {
    const faqSnapshot = await FirestoreCollections.faq.doc(id).get()
    return faqSnapshot.data()
  }

  /**
   * Creates a new faq in the Firestore collection.
   *
   * @param faq The Faq object to create.
   * @returns A promise that resolves to the created Faq object.
   */
  public static async createFaq(faq: Faq) {
    return FirestoreCollections.faq.add(faq)
  }

  public static async deleteFaq(faqId: string) {
    return FirestoreCollections.faq.doc(faqId).delete()
  }
}
