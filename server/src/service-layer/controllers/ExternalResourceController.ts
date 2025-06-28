import { ExternalResourceDataService } from 'data-layer/services/ExternalResourceDataService'
import { StatusCodes } from 'http-status-codes'
import type {
  GetAllExternalResourceResponse,
  GetExternalResourceResponse,
} from 'service-layer/response-models/ExternalResourceResponses'
import { Controller, Get, Path, Route } from 'tsoa'

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
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve External Resource' }
    }
  }
}
