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
  Security,
  SuccessResponse,
} from 'tsoa'
import {
  type UserCreationParams,
  UserRepository,
} from '../../data-access/common/UserRepository'

@Route('users')
export class UserController extends Controller {
  private userRepository = new UserRepository()

  @SuccessResponse('200', 'Found')
  @Get('by-username')
  public async getUserByUsername(
    @Query() username: string,
  ): Promise<User | null> {
    return this.userRepository.getUserByUsername(username)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Found')
  @Get('by-email')
  public async getUserByEmail(@Query() email: string): Promise<User | null> {
    return this.userRepository.getUserByEmail(email)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Found')
  @Get('{userId}')
  public async getUserById(@Path() userId: string): Promise<User | null> {
    return this.userRepository.getUser(userId)
  }

  @SuccessResponse('200', 'Found')
  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers()
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201)
    return this.userRepository.createUser(requestBody)
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Deleted')
  @Delete('by-userId')
  public async deleteUser(
    @Query() userToDeleteId: string,
  ): Promise<User | null> {
    const deletedUser = await this.userRepository.deleteUser(userToDeleteId)
    if (!deletedUser) {
      this.setStatus(400)
      return null
    }
    return deletedUser
  }

  @Security('jwt', ['admin'])
  @SuccessResponse('200', 'Updated')
  @Patch('{userId}')
  public async updateUser(
    @Query() userId: string,
    @Body() updates: UpdateUserPackage,
  ): Promise<User | null> {
    return this.userRepository.updateUser(userId, updates)
  }
}
