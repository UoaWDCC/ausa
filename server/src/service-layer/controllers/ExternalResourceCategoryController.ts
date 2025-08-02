import { ExternalResourceCategoryDataService } from 'data-layer/services/ExternalResourceCategoriesDataService'
import { ExternalResourceDataService } from 'data-layer/services/ExternalResourceDataService'
import { StatusCodes } from 'http-status-codes'
import type {
  createExternalResourceCategoryRequest,
  updateExternalResourceCategoryRequest,
} from 'service-layer/request-models/ExternalResourceCategoryRequests'
import type {
  GetAllExternalResourceCategoryResponse,
  GetExternalResourceCategoryResponse,
} from 'service-layer/response-models/ExternalResourceCategoryResponses'
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
          await ExternalResourceCategoryDataService.getCategoryByName(name)
        if (category) {
          return { data: [category] }
        }
        return { data: [] }
      }
      const categories =
        await ExternalResourceCategoryDataService.getAllCategories()
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
      const res = await ExternalResourceCategoryDataService.getCategoryById(id)
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
        await ExternalResourceCategoryDataService.getCategoryByName(
          category.name,
        )
      if (existingCategory) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'Category with this name already exists' }
      }
      const createdCategory =
        await ExternalResourceCategoryDataService.createCategory(category)
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
        await ExternalResourceCategoryDataService.getCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'Category not found' }
      }
      const updatedCategory =
        await ExternalResourceCategoryDataService.updateCategory(
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
        await ExternalResourceCategoryDataService.getCategoryById(id)
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await ExternalResourceCategoryDataService.deleteCategory(id)
      await ExternalResourceDataService.deleteByCategoryId(id)
    } catch (error) {
      console.error('Error deleting FAQ category:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
