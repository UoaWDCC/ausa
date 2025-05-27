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
import { UserCreationParams, UserUpdateParams } from 'service-layer/request-models/UserRequest'
import UserService from 'data-layer/services/UserService'
import {
  UserResponse,
  GetAllUsersResponse,
} from 'service-layer/response-models/UserResponse'

@Route('user')
export class UserController extends Controller {
  @Get()
  public async getAllUsers(): Promise<GetAllUsersResponse> {
    try {
      const users = await new UserService().getAllUsers()
      return { data: users }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve Users' }
    }
  }

  @Get('{id}')
  public async getUser(@Path() id: string): Promise<UserResponse> {
    try {
      const user = await new UserService().getUser(id)
      if (!user) {
        this.setStatus(404) // Not Found
        return { error: 'User not found' }
      }
      return { data: user }
    } catch {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve User' }
    }
  }

  @Post()
  @SuccessResponse('201', 'Created')
  public async createUser(
    @Body() newUser: UserCreationParams,
  ): Promise<UserResponse> {
    try {
      const createdUser = await new UserService().createUser(newUser)
      this.setStatus(201) // Created
      return { data: createdUser }
    } catch (error) {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to create User' }
    }
  }

  @Delete('{id}')
  public async deleteUser(@Path() id: string): Promise<void> {
    try {
      const user = await new UserService().getUser(id)
      if (!user) {
        this.setStatus(404) // Not Found
        return
      }
      await new UserService().deleteUser(id)
      this.setStatus(204) // No Content
    } catch (error) {
      this.setStatus(500) // Internal Server Error
    }
  }

  @Patch('{id}')
  public async updateUser(
    @Path() id: string,
    @Body() partialUser: UserUpdateParams,
  ): Promise<UserResponse> {
    try {
      const existingUser = await new UserService().getUser(id)
      if (!existingUser) {
        this.setStatus(404) // Not Found
        return { error: 'User not found' }
      }

      await new UserService().updateUser(id, partialUser)
      return { data: await new UserService().getUser(id) }
    } catch (error) {
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to update User' }
    }
  }
}
