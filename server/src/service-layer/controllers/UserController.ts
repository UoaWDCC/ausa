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
import {
  // UserCreationParams,
  UserUpdateParams,
} from 'service-layer/request-models/UserRequest'
import UserService from 'data-layer/services/UserService'
import {
  UserResponse,
  GetAllUsersResponse,
} from 'service-layer/response-models/UserResponse'
import AuthService from 'data-layer/services/AuthService'
import { AuthCreationParams } from 'service-layer/request-models/AuthRequest'
import { FirebaseAuthError } from 'firebase-admin/auth'

@Route('user')
export class UserController extends Controller {
  @Security('jwt', ['admin'])
  @Get()
  public async getAllUsers(): Promise<GetAllUsersResponse> {
    try {
      const users = await new UserService().getAllUsers()
      return { data: users }
    } catch (error) {
      console.error('Error retrieving users:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve Users' }
    }
  }

  @Security('jwt', ['admin'])
  @Get('{id}')
  public async getUser(@Path() id: string): Promise<UserResponse> {
    try {
      const user = await new UserService().getUser(id)
      if (!user) {
        this.setStatus(404) // Not Found
        return { error: 'User not found' }
      }
      return { data: user }
    } catch (error) {
      console.error('Error retrieving user:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to retrieve User' }
    }
  }

  @Security('jwt', ['admin'])
  @Post()
  @SuccessResponse('201', 'Created')
  public async createUser(
    @Body() newUser: AuthCreationParams,
  ): Promise<UserResponse> {
    try {
      const createdUser = await new AuthService().signUpUser(newUser)
      this.setStatus(201) // Created
      return { data: createdUser }
    } catch (error) {
      if (error instanceof FirebaseAuthError) {
        this.setStatus(400) // Bad Request
        return { error: error.message }
      }
      console.error('Error creating user:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to create User' }
    }
  }

  @Security('jwt', ['admin'])
  @Delete('{id}')
  public async deleteUser(@Path() id: string): Promise<void> {
    try {
      const user = await new UserService().getUser(id)
      if (!user) {
        this.setStatus(404) // Not Found
        return
      }
      await new AuthService().deleteUser(id)
      this.setStatus(204) // No Content
    } catch (error) {
      console.error('Error deleting user:', error)
      this.setStatus(500) // Internal Server Error
    }
  }

  @Security('jwt', ['admin'])
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
      console.error('Error updating user:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to update User' }
    }
  }
}
