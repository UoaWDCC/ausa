import type { UpdateUserPackage, User } from 'data-layer/models/User'
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
import {
  type UserCreationParams,
  UserService,
} from '../../data-layer/services/UserService'

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
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201)
    return new UserService().createUser(requestBody)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(@Query() userId: string): Promise<User | null> {
    return new UserService().deleteUser(userId)
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
