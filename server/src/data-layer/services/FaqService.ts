import { collections } from 'data-layer/firebase-collections'
import { Faq, FaqCreationParams, FaqUpdateParams } from 'data-layer/models/Faq'
import { WriteResult } from 'firebase-admin/firestore'

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
   * Creates a new FAQ document.
   * @param newFaq - The FAQ document to create
   * @returns the created FAQ document
   */
  public async createFaq(newFaq: FaqCreationParams): Promise<Faq> {
    const faq = await collections.faq.add({ ...newFaq, id: '' })
    const faqId = faq.id
    await faq.update({ id: faqId })
    return (await faq.get()).data()
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
