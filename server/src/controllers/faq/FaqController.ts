import { FaqCategoryDataService } from 'data-access/faq/FaqCategoryDataRepository'
import { FaqDataService } from 'data-access/faq/FaqDataRepository'
import { StatusCodes } from 'http-status-codes'
import type {
  createFaqRequest,
  updateFaqRequest,
} from 'dtos/request-models/FaqRequests'
import type {
  GetAllFaqResponse,
  GetFaqResponse,
} from 'dtos/response-models/FaqResponses'
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
  Security,
  SuccessResponse,
} from 'tsoa'

@Route('faq')
export class FaqController extends Controller {
  @Get()
  public async getAllFaqs(
    @Query('category') category?: string,
  ): Promise<GetAllFaqResponse> {
    try {
      if (category) {
        const faqs = await FaqDataService.getFaqsByCategoryId(category)
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
  public async getFaqCategory(@Path() id: string): Promise<GetFaqResponse> {
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

  @Security('jwt', ['admin'])
  @Post()
  @SuccessResponse(StatusCodes.CREATED, 'Successfully created FAQ')
  public async createFaq(
    @Body() faq: createFaqRequest,
  ): Promise<GetFaqResponse> {
    try {
      const existingFaqCategory =
        await FaqCategoryDataService.getFaqCategoryById(faq.categoryId)
      if (!existingFaqCategory) {
        this.setStatus(StatusCodes.BAD_REQUEST)
        return { error: 'Invalid FAQ category ID' }
      }
      const createdFaq = await FaqDataService.createFaq(faq)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdFaq }
    } catch (error) {
      console.error('Error creating FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create FAQ' }
    }
  }

  @Security('jwt', ['admin'])
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
      const updatedFaq = await FaqDataService.updateFaq(id, faq)
      return { data: updatedFaq }
    } catch (error) {
      console.error('Error updating FAQ:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update FAQ' }
    }
  }

  @Security('jwt', ['admin'])
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

  @Security('jwt', ['admin'])
  @Delete()
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted all FAQs')
  public async deleteAllFaqs(
    @Query('categoryId') categoryId?: string,
  ): Promise<void> {
    try {
      if (categoryId) {
        const existingCategory =
          await FaqCategoryDataService.getFaqCategoryById(categoryId)
        if (!existingCategory) {
          this.setStatus(StatusCodes.NOT_FOUND)
          return
        }
        await FaqDataService.deleteFaqsByCategoryId(categoryId)
        this.setStatus(StatusCodes.NO_CONTENT)
        return
      }
      await FaqDataService.deleteAllFaqs()
      this.setStatus(StatusCodes.NO_CONTENT)
    } catch (error) {
      console.error('Error deleting all FAQs:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
