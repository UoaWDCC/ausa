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
    @Query() requestingUserId: string,
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    const requestingUser = await new UserService().getUser(requestingUserId)
    if (!requestingUser) {
      this.setStatus(400) // Bad Request if requesting user not found
      return null
    }
    if (requestingUser.role !== 'admin') {
      this.setStatus(403) // Forbidden if requesting user is not an admin
      return null
    }
    this.setStatus(201)
    return new UserService().createUser(requestBody)
  }

  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() requestingUserId: string,
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await new UserService().adminDeleteUser(
      requestingUserId,
      userToDeleteId,
    )
    if (!deletedUser) {
      this.setStatus(400) // Bad Request if user not found or not deleted
      return null
    }
    return new UserService().adminDeleteUser(requestingUserId, userToDeleteId)
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
