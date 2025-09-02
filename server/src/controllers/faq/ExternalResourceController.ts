import { ExternalResourceCategoryDataRepository } from 'data-access/faq/ExternalResourceCategoriesDataRepository'
import { ExternalResourceDataRepository } from 'data-access/faq/ExternalResourceDataRepository'
import { StatusCodes } from 'http-status-codes'
import type {
  createExternalResourceRequest,
  updateExternalResourceRequest,
} from 'dtos/request-models/ExternalResourceRequests'
import type {
  GetAllExternalResourceResponse,
  GetExternalResourceResponse,
} from 'dtos/response-models/ExternalResourceResponses'
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

@Route('external-resources')
export class ExternalResourceController extends Controller {
  @Get()
  public async getAllExternalResources(
    @Query('category') category?: string,
  ): Promise<GetAllExternalResourceResponse> {
    try {
      if (category) {
        const res = await ExternalResourceDataRepository.getByCategoryId(category)
        if (res) {
          return { data: res }
        }
        return { data: [] }
      }
      const externalResources =
        await ExternalResourceDataRepository.getAllExternalResources()
      return { data: externalResources }
    } catch (error) {
      console.error('Error retrieving external resources:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve external resources' }
    }
  }

  @Get('{id}')
  public async getExternalResource(
    @Path() id: string,
  ): Promise<GetExternalResourceResponse> {
    try {
      const res = await ExternalResourceDataRepository.getExternalResourceById(id)
      if (!res) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'External Resource not found' }
      }
      return { data: res }
    } catch (error) {
      console.error('Error retrieving external resource:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to retrieve external resource' }
    }
  }

  @Security('jwt', ['admin'])
  @Post()
  @SuccessResponse(
    StatusCodes.CREATED,
    'Successfully created external resource',
  )
  public async createExternalResource(
    @Body() externalResource: createExternalResourceRequest,
  ): Promise<GetExternalResourceResponse> {
    try {
      const existingCategory =
        await ExternalResourceCategoryDataRepository.getCategoryById(
          externalResource.categoryId,
        )
      if (!existingCategory) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'External Resource Category not found' }
      }
      const createdResource =
        await ExternalResourceDataRepository.createExternalResource(
          externalResource,
        )
      this.setStatus(StatusCodes.CREATED)
      return { data: createdResource }
    } catch (error) {
      console.error('Error creating external resource:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create external resource' }
    }
  }

  @Security('jwt', ['admin'])
  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated external resource')
  public async updateExternalResource(
    @Path() id: string,
    @Body() externalResource: updateExternalResourceRequest,
  ): Promise<GetExternalResourceResponse> {
    try {
      const existingResource =
        await ExternalResourceDataRepository.getExternalResourceById(id)
      if (!existingResource) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return { error: 'External Resource not found' }
      }
      const updatedResource =
        await ExternalResourceDataRepository.updateExternalResource(
          id,
          externalResource,
        )
      return { data: updatedResource }
    } catch (error) {
      console.error('Error updating external resource:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update external resource' }
    }
  }

  @Security('jwt', ['admin'])
  @Delete('{id}')
  @SuccessResponse(
    StatusCodes.NO_CONTENT,
    'Successfully deleted External Resource',
  )
  public async deleteExternalResource(@Path() id: string): Promise<void> {
    try {
      const existingResource =
        await ExternalResourceDataRepository.getExternalResourceById(id)
      if (!existingResource) {
        this.setStatus(StatusCodes.NOT_FOUND)
        return
      }
      await ExternalResourceDataRepository.deleteExternalResource(id)
    } catch (error) {
      console.error('Error deleting external resource:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }

  @Security('jwt', ['admin'])
  @Delete()
  @SuccessResponse(
    StatusCodes.NO_CONTENT,
    'Successfully deleted all External Resources',
  )
  public async deleteAllExternalResources(
    @Query('categoryId') categoryId?: string,
  ): Promise<void> {
    try {
      if (categoryId) {
        const existingCategory =
          await ExternalResourceCategoryDataRepository.getCategoryById(categoryId)
        if (!existingCategory) {
          this.setStatus(StatusCodes.NOT_FOUND)
          return
        }
        await ExternalResourceDataRepository.deleteByCategoryId(categoryId)
        this.setStatus(StatusCodes.NO_CONTENT)
        return
      }
      await ExternalResourceDataRepository.deleteAllExternalResources()
      this.setStatus(StatusCodes.NO_CONTENT)
    } catch (error) {
      console.error('Error deleting all External Resources:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
  }
}
