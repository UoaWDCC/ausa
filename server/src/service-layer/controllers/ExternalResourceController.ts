// src/users/usersController.ts
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
import ExternalResourceService from 'data-layer/services/ExternalResourcesService'
import {
  ExternalResourceResponse,
  GetAllExternalResourceResponse,
} from 'service-layer/response-models/ExternalResourceResponse'
import {
  ExternalResourceCreationParams,
  ExternalResourceUpdateParams,
} from 'data-layer/models/externalResource'

@Route('external-resource')
export class ExternalResourceController extends Controller {
  @Get()
  public async getAllExternalResources(): Promise<GetAllExternalResourceResponse> {
    try {
      const externalResources =
        await new ExternalResourceService().getAllExternalResources()
      return { data: externalResources }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve External Resources' }
    }
  }

  @Get('{id}')
  public async getExternalResource(
    @Path() id: string,
  ): Promise<ExternalResourceResponse> {
    try {
      const res = await new ExternalResourceService().getExternalResource(id)
      if (!res) {
        this.setStatus(404) // Not Found
        return { error: 'External Resource not found' }
      }
      return { data: res }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve External Resource' }
    }
  }

  @Post()
  @SuccessResponse('201', 'Created')
  public async createExternalResource(
    @Body() newExternalResource: ExternalResourceCreationParams,
  ): Promise<ExternalResourceResponse> {
    try {
      const createdExternalResource =
        await new ExternalResourceService().createExternalResource(
          newExternalResource,
        )
      this.setStatus(201) // Created
      return { data: createdExternalResource }
    } catch (error) {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to create External Resource' }
    }
  }

  @Delete('{id}')
  public async deleteExternalResource(@Path() id: string): Promise<void> {
    try {
      const res = await new ExternalResourceService().getExternalResource(id)
      if (!res) {
        this.setStatus(404) // Not Found
        return
      }
      await new ExternalResourceService().deleteExternalResource(id)
      this.setStatus(204) // No Content
    } catch (error) {
      this.setStatus(500) // Internal Server Error
    }
  }

  @Patch('{id}')
  public async updateExternalResource(
    @Path() id: string,
    @Body() partialExternalResource: ExternalResourceUpdateParams,
  ): Promise<ExternalResourceResponse> {
    try {
      const res = await new ExternalResourceService().getExternalResource(id)
      if (!res) {
        this.setStatus(404) // Not Found
        return { error: 'External Resource not found' }
      }

      await new ExternalResourceService().updateExternalResource(
        id,
        partialExternalResource,
      )
      return {
        data: await new ExternalResourceService().getExternalResource(id),
      }
    } catch (error) {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to update External Resource' }
    }
  }
}
