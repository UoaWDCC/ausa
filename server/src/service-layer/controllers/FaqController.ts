import FaqService from 'data-layer/services/FaqService'
import type {
  FaqCreationParams,
  FaqUpdateParams,
} from 'service-layer/request-models/FaqRequest'
import type {
  FaqResponse,
  GetAllFaqsResponse,
} from 'service-layer/response-models/FaqResponse'
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  Security,
  SuccessResponse,
} from 'tsoa'

@Route('faq')
export class FaqController extends Controller {
  @Get()
  public async getAllFaqs(): Promise<GetAllFaqsResponse> {
    try {
      const faqs = await new FaqService().getAllFaqs()
      return { data: faqs }
    } catch (error) {
      console.error('Error retrieving FAQs:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve FAQs' }
    }
  }

  @Security('jwt', ['admin'])
  @Get('{id}')
  public async getFaq(@Path() id: string): Promise<FaqResponse> {
    try {
      const faq = await new FaqService().getFaq(id)
      if (!faq) {
        this.setStatus(404) // Not Found
        return { error: 'FAQ not found' }
      }
      return { data: faq }
    } catch (error) {
      console.error('Error retrieving FAQ:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve FAQ' }
    }
  }

  @Security('jwt', ['admin'])
  @Post()
  @SuccessResponse('201', 'Created')
  public async createFaq(
    @Body() newFaq: FaqCreationParams,
  ): Promise<FaqResponse> {
    try {
      const createdFaq = await new FaqService().createFaq(newFaq)
      this.setStatus(201) // Created
      return { data: createdFaq }
    } catch (error) {
      console.error('Error creating FAQ:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to create FAQ' }
    }
  }

  @Security('jwt', ['admin'])
  @Delete('{id}')
  public async deleteFaq(@Path() id: string): Promise<void> {
    try {
      const faq = await new FaqService().getFaq(id)
      if (!faq) {
        this.setStatus(404) // Not Found
        return
      }
      await new FaqService().deleteFaq(id)
      this.setStatus(204) // No Content
    } catch (error) {
      console.error('Error deleting FAQ:', error)
      this.setStatus(500) // Internal Server Error
    }
  }

  @Security('jwt', ['admin'])
  @Patch('{id}')
  public async updateFaq(
    @Path() id: string,
    @Body() partialFaq: FaqUpdateParams,
  ): Promise<FaqResponse> {
    try {
      const existingFaq = await new FaqService().getFaq(id)
      if (!existingFaq) {
        this.setStatus(404) // Not Found
        return { error: 'FAQ not found' }
      }

      await new FaqService().updateFaq(id, partialFaq)
      return { data: await new FaqService().getFaq(id) }
    } catch (error) {
      console.error('Error updating FAQ:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to update FAQ' }
    }
  }
}
