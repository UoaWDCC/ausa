import { ExternalResourceDataService } from 'data-layer/services/ExternalResourceDataService'
import { StatusCodes } from 'http-status-codes'
import { createExternalResourceRequest } from 'service-layer/request-models/ExternalResourceRequests'
import type {
  GetAllExternalResourceResponse,
  GetExternalResourceResponse,
} from 'service-layer/response-models/ExternalResourceResponses'
import { Body, Controller, Get, Path, Post, Route, SuccessResponse } from 'tsoa'

@Route('external-resources')
export class ExternalResourceController extends Controller {
  @Get()
  public async getAllExternalResources(): Promise<GetAllExternalResourceResponse> {
    try {
      const externalResources =
        await ExternalResourceDataService.getAllExternalResources()
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
      const res = await ExternalResourceDataService.getExternalResourceById(id)
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

  @Post()
  @SuccessResponse(StatusCodes.CREATED, 'Successfully created external resource')
  public async createExternalResource(
    @Body() externalResource: createExternalResourceRequest,
  ): Promise<GetExternalResourceResponse> {
    try {
      const createdResource =
        await ExternalResourceDataService.createExternalResource(externalResource)
      this.setStatus(StatusCodes.CREATED)
      return { data: createdResource }
    } catch (error) {
      console.error('Error creating external resource:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create external resource' }
    }
  }
}
