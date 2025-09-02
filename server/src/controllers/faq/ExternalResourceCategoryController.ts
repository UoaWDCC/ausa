import { ExternalResourceCategoryDataRepository } from 'data-access/faq/ExternalResourceCategoriesDataRepository'
import { ExternalResourceDataRepository } from 'data-access/faq/ExternalResourceDataRepository'
import { StatusCodes } from 'http-status-codes'
import type {
  createExternalResourceCategoryRequest,
  updateExternalResourceCategoryRequest,
} from 'dtos/request-models/ExternalResourceCategoryRequests'
import type {
  GetAllExternalResourceCategoryResponse,
  GetExternalResourceCategoryResponse,
} from 'dtos/response-models/ExternalResourceCategoryResponses'
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

@Route('external-resource-category')
export class ExternalResourceCategoryController extends Controller {
  @Get()
  public async getAllCategories(
    @Query('name') name?: string,
  ): Promise<GetAllExternalResourceCategoryResponse> {
    try {
      if (name) {
        const category =
          await ExternalResourceCategoryDataRepository.getCategoryByName(name)
        if (category) {
          return { data: [category] }
        }
        return { data: [] }
      }
      const categories =
        await ExternalResourceCategoryDataRepository.getAllCategories()
      return { data: categories }
    } catch (error) {
      console.error('Error retrieving External Resource categories:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve External Resource categories' }
    }
  }

  @Get('{id}')
  public async getCategory(
    @Path() id: string,
  ): Promise<GetExternalResourceCategoryResponse> {
    try {
      const res = await ExternalResourceCategoryDataRepository.getCategoryById(id)
      if (!res) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'External Resource Category not found' }
      }
      return { data: res }
    } catch (error) {
      console.error('Error retrieving External Resource category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve External Resource category' }
    }
  }

  //@Security('jwt', ['admin'])
  @Post()
  @SuccessResponse(
    StatusCodes.CREATED,
    'Successfully created External Resource Category',
  )
  public async createCategory(
    @Body() category: createExternalResourceCategoryRequest,
  ): Promise<GetExternalResourceCategoryResponse> {
    try {
      const existingCategory =
        await ExternalResourceCategoryDataRepository.getCategoryByName(
          category.name,
        )
      if (existingCategory) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'Category with this name already exists' }
      }
      const createdCategory =
        await ExternalResourceCategoryDataRepository.createCategory(category)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdCategory }
    } catch (error) {
      console.error('Error creating category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create category' }
    }
  }

  @Security('jwt', ['admin'])
  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated FAQ category')
  public async updateCategory(
    @Path() id: string,
    @Body() faqCategory: updateExternalResourceCategoryRequest,
  ): Promise<GetExternalResourceCategoryResponse> {
    try {
      const existingCategory =
        await ExternalResourceCategoryDataRepository.getCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'Category not found' }
      }
      const updatedCategory =
        await ExternalResourceCategoryDataRepository.updateCategory(
          id,
          faqCategory,
        )
      return { data: updatedCategory }
    } catch (error) {
      console.error('Error updating category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update category' }
    }
  }

  @Security('jwt', ['admin'])
  @Delete('{id}')
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted FAQ category')
  public async deleteCategory(@Path() id: string): Promise<void> {
    try {
      const existingCategory =
        await ExternalResourceCategoryDataRepository.getCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await ExternalResourceCategoryDataRepository.deleteCategory(id)
      await ExternalResourceDataRepository.deleteByCategoryId(id)
    } catch (error) {
      console.error('Error deleting FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
