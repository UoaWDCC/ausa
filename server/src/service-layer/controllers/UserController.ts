// src/users/usersController.ts
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa'
import { User } from 'data-layer/models/user'
import UserDataService from 'data-layer/services/UserDataService'
import { UserCreationParams } from 'service-layer/request-models/UserRequest'

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string,
  ): Promise<User> {
    return new UserDataService().get(userId, name)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<void> {
    this.setStatus(201) // set return status 201
    new UserDataService().create(requestBody)
  }
}
