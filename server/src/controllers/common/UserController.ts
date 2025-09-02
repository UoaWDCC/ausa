import type { UpdateUserPackage, User } from 'models/User'
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
  UserRepository,
} from '../../data-access/common/UserRepository'

@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get('by-username')
  public async getUserByUsername(
    @Query() username: string,
  ): Promise<User | null> {
    return new UserRepository().getUserByUsername(username)
  }

  @SuccessResponse('200', 'Found')
  @Get('by-email')
  public async getUserByEmail(@Query() email: string): Promise<User | null> {
    return new UserRepository().getUserByEmail(email)
  }

  @SuccessResponse('200', 'Found')
  @Get('{userId}')
  public async getUserById(@Path() userId: string): Promise<User | null> {
    return new UserRepository().getUser(userId)
  }

  @SuccessResponse('200', 'Found')
  @Get()
  public async getUsers(): Promise<User[]> {
    return new UserRepository().getAllUsers()
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201)
    return new UserRepository().createUser(requestBody)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await new UserRepository().deleteUser(userToDeleteId)
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
    return new UserRepository().updateUser(userId, updates)
  }}
