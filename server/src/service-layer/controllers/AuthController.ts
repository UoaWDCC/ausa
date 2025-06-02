import {
  Body,
  Controller,
  Patch,
  Path,
  Post,
  Route,
  SuccessResponse,
} from 'tsoa'

import UserService from 'data-layer/services/UserService'
import {
  UserResponse,
} from 'service-layer/response-models/UserResponse'
import AuthService from 'data-layer/services/AuthService'
import { AuthCreationParams, LoginCredentials } from 'service-layer/request-models/AuthRequest'
import { FirebaseAuthError } from 'firebase-admin/auth'
import { UserRole } from 'types/types'
import { FirebaseError } from 'firebase/app'

@Route('auth')
export class AuthController extends Controller {
  @Post('register')
  @SuccessResponse('201', 'Created')
  public async Register(
    @Body() newUser: AuthCreationParams,
  ): Promise<UserResponse> {
    try {
      const createdUser = await new AuthService().signUpUser({...newUser, role: UserRole.USER})
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

  @Post("login")
  @SuccessResponse('200', 'Login Successful')
  public async login(
    @Body() credentials: LoginCredentials,
  ): Promise<UserResponse> {
    try {
      const user = await new AuthService().login(
        credentials.email,
        credentials.password,
      )
      return { data: user }
    } catch (error) {
      if (error instanceof FirebaseError) {
        this.setStatus(401) // Unauthorized
        return { error: error.message }
      }
      console.error('Error logging in user:', error)
      this.setStatus(500) // Internal Server Error
      return { error: 'Failed to login User' }
    }
  }

  @Patch('{id}/forgot-password')
  public async updatePassword(
    @Path() id: string,
    @Body() partialUser: { password: string },
  ): Promise<void> {
    try {
      const existingUser = await new UserService().getUser(id)
      if (!existingUser) {
        this.setStatus(404) // Not Found
      }

      await new AuthService().updateUserPassword(id, partialUser.password)
    } catch (error) {
      console.error('Error updating user:', error)
      this.setStatus(500) // Internal Server Error
    }
  }
}
