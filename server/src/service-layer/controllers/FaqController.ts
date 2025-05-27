import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa'
import { FaqCreationParams, FaqUpdateParams } from 'service-layer/request-models/FaqRequest'
import FaqService from 'data-layer/services/FaqService'
import {
  FaqResponse,
  GetAllFaqsResponse,
} from 'service-layer/response-models/FaqResponse'

@Route('faq')
export class FaqController extends Controller {
  @Get()
  public async getAllFaqs(): Promise<GetAllFaqsResponse> {
    try {
      const faqs = await new FaqService().getAllFaqs()
      return { data: faqs }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve FAQs' }
    }
  }

  @Get('{id}')
  public async getFaq(@Path() id: string): Promise<FaqResponse> {
    try {
      const faq = await new FaqService().getFaq(id)
      if (!faq) {
        this.setStatus(404) // Not Found
        return { error: 'FAQ not found' }
      }
      return { data: faq }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve FAQ' }
    }
  }

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
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to create FAQ' }
    }
  }

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
      this.setStatus(500) // Internal Server Error
    }
  }

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
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to update FAQ' }
    }
  }
}
