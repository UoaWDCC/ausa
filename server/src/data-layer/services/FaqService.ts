import { collections } from 'data-layer/firebase-collections'
import type { WriteResult } from 'firebase-admin/firestore'
import type {
  FaqCreationParams,
  FaqUpdateParams,
} from 'service-layer/request-models/FaqRequest'
import type { Faq } from 'types/types'

export default class FaqService {
  /**
   * Gets an FAQ document by its ID.
   *
   * @param id - The ID of the FAQ document to retrieve
   * @returns the FAQ document
   */
  public async getFaq(id: string): Promise<Faq> {
    const faq = await collections.faq.doc(id).get()
    return faq.data()
  }

  /**
   * Gets all FAQ documents.
   * @return an array of all FAQ documents
   *
   * */
  public async getAllFaqs(): Promise<Faq[]> {
    const faqsSnapshot = await collections.faq.get()
    return faqsSnapshot.docs.map((doc) => doc.data())
  }

  /**
   * Creates a new Faq document.
   * @param newFaq - The Faq document to create
   * @returns the created ExternalResource document
   */
  public async createFaq(newFaq: FaqCreationParams): Promise<Faq> {
    const ref = collections.faq.doc()
    await ref.set({ ...newFaq, id: ref.id })
    return { ...newFaq, id: ref.id }
  }

  /**
   * Updates an existing FAQ document.
   *
   *  @param id - The ID of the FAQ document to update
   *  @param partialFaq - The partial FAQ document with updated fields
   *  @returns the write result of the update operation
   */
  public async updateFaq(
    id: string,
    partialFaq: FaqUpdateParams,
  ): Promise<WriteResult> {
    return await collections.faq.doc(id).update(partialFaq)
  }

  /**
   * Deletes an FAQ document by its ID.
   * @param id - The ID of the FAQ document to delete
   * @returns the write result of the delete operation
   */
  public async deleteFaq(id: string): Promise<WriteResult> {
    return await collections.faq.doc(id).delete()
  }
}
