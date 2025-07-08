import { FaqCategoryDataService } from 'data-layer/services/FaqCategoryDataService'
import { StatusCodes } from 'http-status-codes'
import {
  createFaqCategoryRequest,
  updateFaqCategoryRequest,
} from 'service-layer/request-models/FaqCategoryRequests'
import {
  GetAllFaqCategoryResponse,
  GetFaqCategoryResponse,
} from 'service-layer/response-models/FaqCategoryResponses'
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

@Route('faq-category')
export class FaqCategoryController extends Controller {
  @Get()
  public async getAllFaqCategories(
    @Query('name') name?: string,
  ): Promise<GetAllFaqCategoryResponse> {
    try {
      if (name) {
        const faqCategory =
          await FaqCategoryDataService.getFaqCategoryByName(name)
        if (faqCategory) {
          return { data: [faqCategory] }
        }
        return { data: [] }
      }
      const faqCategories = await FaqCategoryDataService.getAllFaqCategories()
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
      const res = await FaqCategoryDataService.getFaqCategoryById(id)
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

  @Post()
  @SuccessResponse(
    StatusCodes.CREATED,
    'Successfully created external resource',
  )
  public async createFaqCategory(
    @Body() faqCategory: createFaqCategoryRequest,
  ): Promise<GetFaqCategoryResponse> {
    try {
      const existingCategory =
        await FaqCategoryDataService.getFaqCategoryByName(faqCategory.name)
      if (existingCategory) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'FAQ Category with this name already exists' }
      }
      const createdCategory =
        await FaqCategoryDataService.createFaqCategory(faqCategory)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdCategory }
    } catch (error) {
      console.error('Error creating FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create FAQ category' }
    }
  }

  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated FAQ category')
  public async updateFaqCategory(
    @Path() id: string,
    @Body() faqCategory: updateFaqCategoryRequest,
  ): Promise<GetFaqCategoryResponse> {
    try {
      const existingCategory =
        await FaqCategoryDataService.getFaqCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'FAQ Category not found' }
      }
      const updatedCategory = await FaqCategoryDataService.updateFaqCategory(
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

  // Need to delete all related Faqs too, wait for FaqController to be implemented
  @Delete('{id}')
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted FAQ category')
  public async deleteFaqCategory(@Path() id: string): Promise<void> {
    try {
      const existingCategory =
        await FaqCategoryDataService.getFaqCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await FaqCategoryDataService.deleteFaqCategory(id)
    } catch (error) {
      console.error('Error deleting FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
