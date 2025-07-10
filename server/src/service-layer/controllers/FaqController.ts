import { FaqDataService } from 'data-layer/services/FaqDataService'
import { StatusCodes } from 'http-status-codes'
import { createFaqRequest, updateFaqRequest } from 'service-layer/request-models/FaqRequests'
import { GetAllFaqResponse, GetFaqResponse } from 'service-layer/response-models/FaqResponses'
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'

@Route('faq')
export class FaqController extends Controller {
  @Get()
  public async getAllFaqs(
    @Query('category') categoryId?: string,
  ): Promise<GetAllFaqResponse> {
    try {
      if (categoryId) {
        const faqs =
          await FaqDataService.getFaqsByCategoryId(categoryId)
        if (faqs) {
          return { data: faqs }
        }
        return { data: [] }
      }
      const faqs = await FaqDataService.getAllFaq()
      return { data: faqs }
    } catch (error) {
      console.error('Error retrieving FAQs', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve FAQs' }
    }
  }

  @Get('{id}')
  public async getFaqCategory(
    @Path() id: string,
  ): Promise<GetFaqResponse> {
    try {
      const res = await FaqDataService.getFaq(id)
      if (!res) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'FAQ not found' }
      }
      return { data: res }
    } catch (error) {
      console.error('Error retrieving FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve FAQ' }
    }
  }

  @Post()
  @SuccessResponse(
    StatusCodes.CREATED,
    'Successfully created FAQ',
  )
  public async createFaq(
    @Body() faq: createFaqRequest,
  ): Promise<GetFaqResponse> {
    try {
      const createdFaq =
        await FaqDataService.createFaq(faq)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdFaq }
    } catch (error) {
      console.error('Error creating FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create FAQ' }
    }
  }

  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated FAQ')
  public async updateFaq(
    @Path() id: string,
    @Body() faq: updateFaqRequest,
  ): Promise<GetFaqResponse> {
    try {
      const existingFaq = await FaqDataService.getFaq(id)
      if (!existingFaq) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'FAQ not found' }
      }
      const updatedFaq = await FaqDataService.updateFaq(
        id,
        faq,
      )
      return { data: updatedFaq }
    } catch (error) {
      console.error('Error updating FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update FAQ' }
    }
  }

  @Delete('{id}')
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted FAQ')
  public async deleteFaq(@Path() id: string): Promise<void> {
    try {
      const existingFaq = await FaqDataService.getFaq(id)
      if (!existingFaq) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await FaqDataService.deleteFaq(id)
    } catch (error) {
      console.error('Error deleting FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
