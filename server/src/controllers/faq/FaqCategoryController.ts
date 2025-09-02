import { FaqCategoryDataRepository } from 'data-access/faq/FaqCategoryDataRepository'
import { FaqDataRepository } from 'data-access/faq/FaqDataRepository'
import { StatusCodes } from 'http-status-codes'
import type {
  createFaqCategoryRequest,
  updateFaqCategoryRequest,
} from 'dtos/request-models/FaqCategoryRequests'
import type {
  GetAllFaqCategoryResponse,
  GetFaqCategoryResponse,
} from 'dtos/response-models/FaqCategoryResponses'
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

@Route('faq-category')
export class FaqCategoryController extends Controller {
  @Get()
  public async getAllFaqCategories(
    @Query('name') name?: string,
    @Query('url') url?: string,
  ): Promise<GetAllFaqCategoryResponse> {
    try {
      if (name) {
        const faqCategory =
          await FaqCategoryDataRepository.getFaqCategoryByName(name)
        if (faqCategory) {
          return { data: [faqCategory] }
        }
        return { data: [] }
      }
      if (url) {
        const faqCategory =
          await FaqCategoryDataRepository.getFaqCategoryByURL(url)
        if (faqCategory) {
          return { data: [faqCategory] }
        }
        return { data: [] }
      }
      const faqCategories = await FaqCategoryDataRepository.getAllFaqCategories()
      return { data: faqCategories }
    } catch (error) {
      console.error('Error retrieving FAQ categories:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve FAQ categories' }
    }
  }

  @Get('{id}')
  public async getFaqCategory(
    @Path() id: string,
  ): Promise<GetFaqCategoryResponse> {
    try {
      const res = await FaqCategoryDataRepository.getFaqCategoryById(id)
      if (!res) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'FAQ Category not found' }
      }
      return { data: res }
    } catch (error) {
      console.error('Error retrieving FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve FAQ category' }
    }
  }

  @Security('jwt', ['admin'])
  @Post()
  @SuccessResponse(StatusCodes.CREATED, 'Successfully created FAQ Category')
  public async createFaqCategory(
    @Body() faqCategory: createFaqCategoryRequest,
  ): Promise<GetFaqCategoryResponse> {
    try {
      const existingCategory =
        await FaqCategoryDataRepository.getFaqCategoryByName(faqCategory.name)
      if (existingCategory) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'FAQ Category with this name already exists' }
      }
      const existingUrlCategory =
        await FaqCategoryDataRepository.getFaqCategoryByURL(faqCategory.url)
      if (existingUrlCategory) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'FAQ Category with this URL already exists' }
      }
      const createdCategory =
        await FaqCategoryDataRepository.createFaqCategory(faqCategory)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdCategory }
    } catch (error) {
      console.error('Error creating FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create FAQ category' }
    }
  }

  @Security('jwt', ['admin'])
  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated FAQ category')
  public async updateFaqCategory(
    @Path() id: string,
    @Body() faqCategory: updateFaqCategoryRequest,
  ): Promise<GetFaqCategoryResponse> {
    try {
      const existingCategory =
        await FaqCategoryDataRepository.getFaqCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'FAQ Category not found' }
      }
      const updatedCategory = await FaqCategoryDataRepository.updateFaqCategory(
        id,
        faqCategory,
      )
      return { data: updatedCategory }
    } catch (error) {
      console.error('Error updating FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update FAQ category' }
    }
  }

  @Security('jwt', ['admin'])
  @Delete('{id}')
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted FAQ category')
  public async deleteFaqCategory(@Path() id: string): Promise<void> {
    try {
      const existingCategory =
        await FaqCategoryDataRepository.getFaqCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await FaqCategoryDataRepository.deleteFaqCategory(id)
      await FaqDataRepository.deleteFaqsByCategoryId(id)
    } catch (error) {
      console.error('Error deleting FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
