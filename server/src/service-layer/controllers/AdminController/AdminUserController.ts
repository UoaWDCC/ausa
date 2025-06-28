import { UserDataService } from 'data-layer/services/UserDataService'
import { StatusCodes } from 'http-status-codes'
import type {
  CreateUserRequest,
  UpdateUserRequest,
} from 'service-layer/request-models/AdminRequests'
import type {
  GetAllUsersResponse,
  GetUserResponse,
} from 'service-layer/response-models/AdminResponses'
import type { CommonResponse } from 'service-layer/response-models/CommonResponse'
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  Security,
  SuccessResponse,
} from 'tsoa'

@Route('admin/users')
@Security('jwt', ['admin'])
export class AdminUserController extends Controller {
  /**
   * Creates a new user.
   *
   * @param userData The data for the new user.
   * @returns A promise that resolves when the user is created.
   */
  @Post()
  @SuccessResponse(StatusCodes.CREATED, 'Successfully created user')
  public async createUser(
    @Body() userData: CreateUserRequest,
  ): Promise<CommonResponse> {
    try {
      if (await UserDataService.getUserById(userData.id)) {
        this.setStatus(StatusCodes.CONFLICT)
        return { error: 'User already exists' }
      }
      await UserDataService.createUser(userData.id, userData.user)
      this.setStatus(StatusCodes.OK)
      return {}
    } catch (error) {
      console.error('Error creating user:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to create user' }
    }
  }

  /**
   * Retrieves all users.
   *
   * @returns A promise that resolves to an object containing the retrieved users.
   */
  @Get()
  @SuccessResponse(StatusCodes.OK, 'Successfully fetched all users')
  public async getAllUsers(): Promise<GetAllUsersResponse> {
    try {
      const users = await UserDataService.getAllUsers()
      return { data: users }
    } catch (error) {
      console.error('Error fetching users:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to get all users' }
    }
  }

  /**
   * Retrieves a user by ID.
   *
   * @param id The ID of the user to retrieve.
   * @returns A promise that resolves to an object containing the retrieved user.
   */
  @Get('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully fetched user')
  public async getUser(@Path() id: string): Promise<GetUserResponse> {
    try {
      const user = await UserDataService.getUserById(id)
      return { data: user }
    } catch (error) {
      console.error('Error retrieving user:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to get user' }
    }
  }

  @Patch('{id}')
  @SuccessResponse(StatusCodes.OK, 'Successfully updated user')
  public async updateUser(
    @Path() id: string,
    @Body() updateUserBody: UpdateUserRequest,
  ): Promise<CommonResponse> {
    try {
      const user = await UserDataService.getUserById(id)
      if (!user) this.setStatus(StatusCodes.NOT_FOUND)
      await UserDataService.updateUserData(id, updateUserBody.user)
      this.setStatus(StatusCodes.OK)
      return {}
    } catch (error) {
      console.error('Error updating user:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to update user' }
    }
  }

  @Delete('{id}')
  @SuccessResponse(StatusCodes.NO_CONTENT, 'Successfully deleted user')
  public async deleteUser(@Path() id: string): Promise<CommonResponse> {
    try {
      const user = await UserDataService.getUserById(id)
      if (!user) this.setStatus(StatusCodes.NOT_FOUND)
      await UserDataService.deleteUser(id)
      this.setStatus(StatusCodes.NO_CONTENT)
      return {}
    } catch (error) {
      console.error('Error deleting user:', error)
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR)
      return { error: 'Failed to delete user' }
    }
  }
}
