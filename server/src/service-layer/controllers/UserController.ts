import AuthService from 'business-layer/services/AuthService'
import type { UpdateUserPackage, User } from 'data-layer/models/User'
import type { CreateUserRequestBody } from 'service-layer/request-models/UserRequests'
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
  SuccessResponse,
} from 'tsoa'
import { UserService } from '../../data-layer/services/UserService'

@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-username')
  public async getUserByUsername(
    @Query() username: string,
  ): Promise<User | null> {
    return new UserService().getUserByUsername(username)
  }

  @SuccessResponse('200', 'Found')
  @Get('by-email')
  public async getUserByEmail(@Query() email: string): Promise<User | null> {
    return new UserService().getUserByEmail(email)
  }

  @SuccessResponse('200', 'Found')
  @Get('{userId}')
  public async getUserById(@Path() userId: string): Promise<User | null> {
    return new UserService().getUser(userId)
  }

  @SuccessResponse('200', 'Found')
  @Get()
  public async getUsers(): Promise<User[]> {
    return new UserService().getAllUsers()
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: CreateUserRequestBody,
  ): Promise<User> {
    const userRecord = await new AuthService().createUser(
      requestBody.email,
      requestBody.password,
    )
    this.setStatus(201)
    return new UserService().createUser(userRecord.uid, requestBody.data)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await new UserService().deleteUser(userToDeleteId)
    if (!deletedUser) {
      this.setStatus(400)
      return null
    }
    return deletedUser
  }

  @SuccessResponse('200', 'Updated')
  @Patch('{userId}')
  public async updateUser(
    @Query() userId: string,
    @Body() updates: UpdateUserPackage,
  ): Promise<User | null> {
    return new UserService().updateUser(userId, updates)
  }
}
