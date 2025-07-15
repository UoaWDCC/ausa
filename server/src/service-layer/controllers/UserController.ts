import { User } from 'data-layer/models/User'

import {
  UserCreationParams,
  UserService,
} from '../../data-layer/services/UserService'
import {
  Controller,
  Get,
  Query,
  Route,
  Post,
  SuccessResponse,
  Body,
  Path,
} from 'tsoa'

@Route('users')
export class UserController extends Controller {
  @SuccessResponse('200', 'Found')
  @Get()
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

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201)
    return new UserService().createUser(requestBody)
  }
}
