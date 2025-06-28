import AuthService from 'data-layer/services/AuthService'
import UserService from 'data-layer/services/UserService'
import { FirebaseError } from 'firebase/app'
import { FirebaseAuthError } from 'firebase-admin/auth'
import type {
  AuthCreationParams,
  LoginCredentials,
} from 'service-layer/request-models/AuthRequest'
import type { UserResponse } from 'service-layer/response-models/UserResponse'
import {
  Body,
  Controller,
  Patch,
  Post,
  Request,
  Route,
  Security,
  SuccessResponse,
} from 'tsoa'
import { UserRole } from 'types/types'

@Route('auth')
export class AuthController extends Controller {
  @Post('register')
  @SuccessResponse('201', 'Created')
  public async Register(
    @Body() newUser: AuthCreationParams,
  ): Promise<UserResponse> {
    try {
      const createdUser = await new AuthService().signUpUser({
        ...newUser,
        role: UserRole.USER,
      })
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

  @Post('login')
  @SuccessResponse('200', 'Login Successful')
  public async login(
    @Body() credentials: LoginCredentials,
  ): Promise<UserResponse> {
    try {
      const user = await new AuthService().login(
        credentials.email,
        credentials.password,
      )
      this.setHeader('Authorization', `Bearer ${user.token}`)
      return { data: { ...user, token: undefined } }
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

  @Security('jwt')
  @Patch('forgot-password')
  public async updatePassword(
    @Body() partialUser: { password: string },
    @Request() request: any, // This is to access the request object if needed
  ): Promise<void> {
    try {
      const id = request.user.id
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
